interface BookThemeDetails {
  book_theme: string
  chapter_context: string
  documents: [
    {
      title: string
      document: {
        url: string
        filename: string
      }
    },
  ]
}

// "documents": [
//   {
//       "title": "Word Format",
//       "document": {
//           "ID": 7698,
//           "id": 7698,
//           "title": "Genesis 1-1",
//           "filename": "Genesis-1-1.docx",
//           "filesize": 14049,
//           "url": "https://13.51.172.229/wp-content/uploads/2019/03/Genesis-1-1.docx",
//           "link": "https://13.51.172.229/commentary/gen/gen-1/genesis-11/attachment/genesis-1-1/",
//           "alt": "",
//           "author": "1",
//           "description": "",
//           "caption": "",
//           "name": "genesis-1-1",
//           "status": "inherit",
//           "uploaded_to": 1178,
//           "date": "2022-03-17 15:11:16",
//           "modified": "2022-03-17 15:11:16",
//           "menu_order": 0,
//           "mime_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//           "type": "application",
//           "subtype": "vnd.openxmlformats-officedocument.wordprocessingml.document",
//           "icon": "https://13.51.172.229/wp-includes/images/media/document.png"
//       }
//   },
//   {
//       "title": "PDF Format",
//       "document": {
//           "ID": 7702,
//           "id": 7702,
//           "title": "Genesis-1-1",
//           "filename": "Genesis-1-1.pdf",
//           "filesize": 38347,
//           "url": "https://13.51.172.229/wp-content/uploads/2019/03/Genesis-1-1.pdf",
//           "link": "https://13.51.172.229/commentary/gen/gen-1/genesis-11/attachment/genesis-1-1-2/",
//           "alt": "",
//           "author": "1",
//           "description": "",
//           "caption": "",
//           "name": "genesis-1-1-2",
//           "status": "inherit",
//           "uploaded_to": 1178,
//           "date": "2022-03-17 16:48:06",
//           "modified": "2022-03-17 16:48:06",
//           "menu_order": 0,
//           "mime_type": "application/pdf",
//           "type": "application",
//           "subtype": "pdf",
//           "icon": "https://13.51.172.229/wp-includes/images/media/document.png"
//       }
//   }
// ],
