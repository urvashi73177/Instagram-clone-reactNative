import { USERS } from "./Users";

export const POSTS = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?ixlib=rb-4.0.3&ixid=M3wxMjA3fD B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

    user: USERS[0].user,

    likes: 7860 ,

    caption: "“You must be the change you wish to see in the world.” — Gandhi",

    profile_picture: USERS[0].image,

    comments: [
        {
            user: "urvashi",
            comment: "“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.” — Albert Einstein",
        },
            {
                user: "John",
                comment: "yay!",
            },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

    user: USERS[1].user,

    likes: 3456,

    caption: "You can do this",

    profile_picture: USERS[1].image,

    comments: [
      {
        user: "urvashi",
        comment: "YEA!! KEEP GOING BUDDY. YOU'VE GOT THIS.",
      },
      {
        user: "John",
        comment: "yay!",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",

    user: USERS[2].user,

    likes: 4567 ,

    caption: " “He who fears he will suffer, already suffers because he fears.” — Michel De Montaigne",

    profile_picture: USERS[2].image,

    comments: [
        {
          user: "urvashi",
          comment: "YEA!! KEEP GOING BUDDY. YOU'VE GOT THIS.",
        },
        {
          user: "John",
          comment: "yay!",
        },
      ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",

    user: USERS[3].user,

    likes: 1236,

    caption: "You can do this",

    profile_picture: USERS[3].image,

    comments: [
      {
        user: "urvashi",
        comment: "YEA!! KEEP GOING BUDDY. YOU'VE GOT THIS.",
      },
      {
        user: "John",
        comment: "yay!",
      },
    ],
  },
];
