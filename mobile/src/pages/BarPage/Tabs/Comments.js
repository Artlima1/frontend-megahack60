import React from "react";

import { Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
  },
  commentsContainer: {
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
  },
  commentsCount: {
    color: "#2D9235",
    margin: 20,
    fontSize: 20,
  },
  comment: {
    flexDirection: "row",
    padding: 20,
  },
  divider: {
    borderColor: "#ffffff",
    borderWidth: 1,
    width: "80%",
    alignSelf: "center",
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 400 / 2,
  },
  commentText: {
    marginLeft: 15,
    color: "#ffffff",
  },
});

export default function Comments({ comments }) {
  return (
    <View style={styles.container}>
      <View style={styles.commentsContainer}>
        <Text style={styles.commentsCount}>Comentários: {comments.length}</Text>
        {comments.map((comment) => {
          return (
            <View>
              <View style={styles.comment}>
                <Image
                  source={require("../../../images/tabata.png")}
                  style={styles.userImg}
                />
                <Text style={styles.commentText}>{comment.comment}</Text>
              </View>
              <View style={styles.divider} />
            </View>
          );
        })}
      </View>
    </View>
  );
}
