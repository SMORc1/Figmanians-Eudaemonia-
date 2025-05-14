import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Modal, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONT } from '../styles/AppStyles';

const memoryStorage = {};
const storage = {
  getItem: (key) => Promise.resolve(memoryStorage[key] || null),
  setItem: (key, value) => Promise.resolve(memoryStorage[key] = value),
};

const JournalLogsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [logs, setLogs] = useState([]);
  const [editingLog, setEditingLog] = useState(null);
  const [showChatPrompt, setShowChatPrompt] = useState(false);

  useEffect(() => { loadLogs(); }, []);

  const loadLogs = async () => {
    try {
      const storedLogs = await storage.getItem('@journal_logs');
      if (storedLogs) setLogs(JSON.parse(storedLogs));
    } catch (error) {
      console.error('Failed to load logs:', error);
    }
  };

  const saveLogs = async (newLogs) => {
    try {
      await storage.setItem('@journal_logs', JSON.stringify(newLogs));
    } catch (error) {
      console.error('Failed to save logs:', error);
    }
  };

  const detectEmotionalContent = (text) => {
    const lowerText = text.toLowerCase();
    const emotionalKeywords = [
      'sad', 'depressed', 'anxious', 'angry', 'lonely', 
      'stressed', 'overwhelmed', 'hurt', 'frustrated', 
      'scared', 'worried', 'heartbroken', 'lost'
    ];
    return emotionalKeywords.some(keyword => lowerText.includes(keyword));
  };

  const handleSave = () => {
    if (!title.trim() || !entry.trim()) return;

    const fullText = `${title}\n${entry}`;
    const hasEmotionalContent = detectEmotionalContent(fullText);

    const updatedLogs = editingLog
      ? logs.map(log => 
          log.id === editingLog.id 
            ? { ...log, text: fullText } 
            : log
        )
      : [{
          id: Date.now().toString(),
          time: new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          text: fullText,
        }, ...logs];

    setLogs(updatedLogs);
    saveLogs(updatedLogs);
    resetForm();

    if (hasEmotionalContent && !editingLog) {
      Alert.alert(
        "Need to talk?",
        "I noticed your entry contains some heavy emotions. Would you like to chat with Eudaemonia to process these feelings?",
        [
          {
            text: "No thanks",
            style: "cancel"
          },
          { 
            text: "Yes please", 
            onPress: () => navigation.navigate('ChatBotScreen') 
          }
        ]
      );
    }
  };

  const resetForm = () => {
    setTitle('');
    setEntry('');
    setEditingLog(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Journal</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Journal Entries List */}
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.entryCard}
            onPress={() => {
              const [logTitle, ...logEntry] = item.text.split('\n');
              setTitle(logTitle);
              setEntry(logEntry.join('\n'));
              setEditingLog(item);
              setModalVisible(true);
            }}
          >
            <Text style={styles.entryDate}>{item.time}</Text>
            <Text 
              style={styles.entryText} 
              numberOfLines={2} 
              ellipsizeMode="tail"
            >
              {item.text.replace('\n', ' - ')}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="journal-outline" size={48} color={COLORS.ashGray} />
            <Text style={styles.emptyText}>No entries yet</Text>
          </View>
        }
      />

      {/* Add Button */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>

      {/* Entry Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={resetForm}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {editingLog ? 'Edit Entry' : 'New Entry'}
              </Text>
              <TouchableOpacity onPress={resetForm}>
                <Ionicons name="close" size={24} color={COLORS.prussianBlue} />
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Title"
              placeholderTextColor={COLORS.ashGray}
              value={title}
              onChangeText={setTitle}
              style={styles.input}
              autoFocus
            />

            <TextInput
              placeholder="Write your thoughts..."
              placeholderTextColor={COLORS.ashGray}
              value={entry}
              onChangeText={setEntry}
              style={styles.textArea}
              multiline
              textAlignVertical="top"
            />

            <TouchableOpacity 
              style={[
                styles.saveButton, 
                (!title.trim() || !entry.trim()) && styles.disabledButton
              ]}
              onPress={handleSave}
              disabled={!title.trim() || !entry.trim()}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.alabaster,
  },
  headerText: {
    fontFamily: FONT.header,
    fontSize: 20,
    color: COLORS.prussianBlue,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  entryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  entryDate: {
    fontFamily: FONT.body,
    fontSize: 13,
    color: COLORS.ashGray,
    marginBottom: 4,
  },
  entryText: {
    fontFamily: FONT.body,
    fontSize: 16,
    color: COLORS.prussianBlue,
    lineHeight: 22,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  emptyText: {
    fontFamily: FONT.body,
    fontSize: 16,
    color: COLORS.ashGray,
    marginTop: 16,
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 60,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.indigoDye,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.indigoDye,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 32,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: FONT.header,
    fontSize: 18,
    color: COLORS.prussianBlue,
  },
  input: {
    fontFamily: FONT.body,
    fontSize: 16,
    backgroundColor: COLORS.alabaster,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    color: COLORS.prussianBlue,
  },
  textArea: {
    fontFamily: FONT.body,
    fontSize: 16,
    backgroundColor: COLORS.alabaster,
    borderRadius: 10,
    padding: 16,
    height: 180,
    marginBottom: 20,
    color: COLORS.prussianBlue,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: COLORS.indigoDye,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  saveButtonText: {
    fontFamily: FONT.bodyBold,
    fontSize: 16,
    color: 'white',
  },
};

export default JournalLogsScreen;
