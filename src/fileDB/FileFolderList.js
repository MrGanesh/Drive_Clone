const driveDataDB = {
  name: "global",
  fileList: [
    {
      id: "1",
      name: "root",
      isFolder: true,
      isOpen: false,
      isVisible: true,
      fileList: [
        {
          id: "11",
          name: "rootChild1",
          isFolder: true,
          isOpen: false,
          isVisible: true,
          fileList: []
        },
        {
          id: "22",
          name: "rootChild2",
          isFolder: true,
          isOpen: false,
          isVisible: true,
          fileList: []
        }
      ]
    },
    {
      id: "2",
      name: "public",
      isFolder: true,
      isOpen: false,
      isVisible: true,
      fileList: []
    },
    {
      id: "3",
      name: "private",
      isFolder: true,
      isOpen: false,
      isVisible: true,
      fileList: []
    },
    {
      id: "4",
      name: "images",
      isFolder: true,
      isOpen: false,
      isVisible: true,
      fileList: []
    },
    {
      id: "5",
      name: "notes",
      isFolder: false,
      isVisible: true,
      fileList: []
    }
  ]
};

export default driveDataDB;
