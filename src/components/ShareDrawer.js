import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

const contacts = [
  {
    name: "Arda",
    photo: {
      uri: "https://images.unsplash.com/photo-1672675225389-4d7b6f231f5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2glMjB5b3VuZyUyMGJsYWNrfGVufDB8fDB8fHww",
    },
  },
  {
    name: "David",
    photo: {
      uri: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
  },
  {
    name: "Martin",
    photo: {
      uri: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXNpYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Samira",
    photo: {
      uri: "https://plus.unsplash.com/premium_photo-1726776021297-4177d0e96af0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlc3NvYXMlMjBuZWdyYXN8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Lúcia",
    photo: {
      uri: "https://plus.unsplash.com/premium_photo-1682148491997-c181665cb0b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBlc3NvYXMlMjBuZWdyYXN8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Tom",
    photo: {
      uri: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
  },
  {
    name: "Patricia",
    photo: {
      uri: "https://images.unsplash.com/photo-1525875975471-999f65706a10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
  },
  {
    name: "Rajeet",
    photo: {
      uri: "https://images.unsplash.com/photo-1590473159791-1d514fd3656e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    name: "Ismael",
    photo: {
      uri: "https://plus.unsplash.com/premium_photo-1674639437824-771a65f1738b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBlc3NvYXMlMjBuZWdyYXN8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    name: "Ruteh",
    photo: {
      uri: "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=900&auto=format&fit=crop&q=60",
    },
  },
];

const ShareDrawer = ({ visible, onClose }) => {
  const [selected, setSelected] = useState([]);
  const [copiedText, setCopiedText] = useState("");
  const invitationLink = "https://saviotito.learnings";

  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(invitationLink);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  useEffect(() => {
    if (!visible) {
      setSelected([]);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.drawerWrapper}>
          <View style={styles.drawer}>
            <View style={styles.drawerIcon}>
              <Text style={styles.drawerIconText}>🔗</Text>
            </View>

            <Pressable style={styles.closeBtn} onPress={onClose}>
              <Ionicons
                name="close-outline"
                size={25}
                color="#444"
                style={styles.closeIcon}
              />
            </Pressable>

            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Share with Friends</Text>
              <Text style={styles.drawerDescription}>
                Learning is more effective when you connect with friends!
              </Text>
            </View>

            <View style={styles.form}>
              <TextInput
                placeholder="your invitation link"
                value={invitationLink}
                editable={false}
                style={styles.linkInput}
              />
              <Pressable style={styles.icon} onPress={copyToClipboard}>
                <Ionicons name="copy-outline" size={20} color="#555" />
              </Pressable>
            </View>

            <View style={styles.contactArea}>
              <Text style={styles.contactDescription}>Share to contacts</Text>
              <ScrollView contentContainerStyle={styles.contactList}>
                {contacts.map((contact, i) => {
                  const isSelected = selected.includes(contact.name);
                  return (
                    <Pressable
                      key={i}
                      style={styles.contactItem}
                      onPress={() => toggleSelect(contact.name)}
                    >
                      <View style={styles.avatarWrapper}>
                        <Image
                          source={contact.photo}
                          style={[
                            styles.contactAvatar,
                            isSelected && styles.contactAvatarSelected,
                          ]}
                        />
                        {isSelected && (
                          <View style={styles.checkIconWrapper}>
                            <Ionicons
                              name="checkmark-outline"
                              size={12}
                              color="#fff"
                            />
                          </View>
                        )}
                      </View>
                      <Text style={styles.contactName}>{contact.name}</Text>
                    </Pressable>
                  );
                })}
              </ScrollView>

              <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Share</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerWrapper: {
    width: "90%",
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 30,
    borderColor: "#bbbbbbff",
  },
  drawer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
  },
  drawerIcon: {
    position: "absolute",
    top: -40,
    width: 85,
    height: 85,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerIconText: { fontSize: 40 },
  closeBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 25,
    borderColor: "#dfdfdfff",
  },
  drawerHeader: { marginTop: 50, alignItems: "center" },
  drawerTitle: { fontSize: 22, fontWeight: "bold", color: "#111" },
  drawerDescription: {
    fontSize: 15,
    fontWeight: "300",
    color: "#555",
    textAlign: "center",
    marginTop: 6,
  },
  form: { width: "100%", marginTop: 25 },
  linkInput: {
    width: "100%",
    paddingVertical: 13,
    paddingHorizontal: 15,
    paddingRight: 40,
    borderRadius: 6,
    fontSize: 14,
    color: "#555",
    backgroundColor: "#dce3eb45",
  },
  icon: {
    position: "absolute",
    right: 5,
    top: "30%",
    transform: [{ translateY: -11 }],
    padding: 10,
  },
  contactArea: { marginTop: 25, width: "100%" },
  contactDescription: { fontSize: 14, fontWeight: "bold", marginBottom: 12 },
  contactList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  contactItem: { alignItems: "center", width: "18%", marginBottom: 15 },
  avatarWrapper: { position: "relative" },
  contactAvatar: {
    width: 50,
    height: 50,
    marginBottom: 8,
    borderRadius: 25,
    backgroundColor: "#ddd",
    borderWidth: 2,
    borderColor: "transparent",
  },
  contactAvatarSelected: {
    borderColor: "#EE204D",
  },
  checkIconWrapper: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: "#EE204D",
    borderRadius: 10,
    padding: 2,
  },
  contactName: { fontSize: 12, fontWeight: "400", color: "#333" },
  btn: { paddingVertical: 13, borderRadius: 8, backgroundColor: "#000" },
  btnText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
});
export default ShareDrawer;
