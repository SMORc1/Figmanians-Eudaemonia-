import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppStyles, { COLORS } from "../styles/AppStyles";

const contacts = [
  { id: '1', name: 'Nayeon Im', phone: '(308) 555-0121' },
  { id: '2', name: 'Momo Hirai', phone: '(684) 555-0102' },
  { id: '3', name: 'Sana Minatozaki', phone: '(704) 555-0127' },
  { id: '4', name: 'Jihyo Park', phone: '(505) 555-0125' },
  { id: '5', name: 'Mina Myoui', phone: '(225) 555-0118' },
  { id: '6', name: 'Dahyun Kim', phone: '(406) 555-0120' },
  { id: '7', name: 'Chaeyoung Son', phone: '(480) 555-0103' },
  { id: '8', name: 'Tzuyu Chou', phone: '(480) 555-0103' },
];

const UserContactScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image source={require('../../assets/images/Profile.jpg')} style={styles.profileImage} />
      <View>
        <Text style={styles.contactText}>{item.name}</Text>
        <Text style={styles.contactNum}>{item.phone}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.prussianBlue} />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Contacts</Text>
        <TouchableOpacity>
          <Ionicons name="add-outline" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default UserContactScreen;

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontFamily: AppStyles.title.fontFamily,
    fontSize: 20,
    color: COLORS.prussianBlue,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: COLORS.alabaster,
    borderRadius: 12,
    padding: 12,
    borderColor: COLORS.prussianBlue,
    borderWidth: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactText: {
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
    fontSize: 16,
    color: COLORS.prussianBlue,
  },
  contactNum: {
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
    fontSize: 14,
    color: COLORS.prussianBlue,
  },
};