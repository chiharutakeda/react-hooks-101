// action = {
//   type:'CREATE_EVEMT',
//   title:'2020東京オリンピックのお知らせ',
//   body:'2020年に東京オリンピックを開催します！つきましては、、、、、'
// }

// state=[]
// state=[{id:1,title:'タイトル1',body:'ボディー1'}]

// state=[
//   {id:1,title:'タイトル1',body:'ボディー1'},
//   {id:2,title:'タイトル2',body:'ボディー2'},
//   {id:3,title:'タイトル3',body:'ボディー3'},
// ]
// state=[
//   {id:1,title:'タイトル1',body:'ボディー1'},
//   {id:2,title:'タイトル2',body:'ボディー2'},
//   {id:3,title:'タイトル3',body:'ボディー3'},
//   {id:4,title:'タイトル4',body:'ボディー4'}.
// ]

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state,{id,...event}];
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENT':
      return [];
    default:
      return state
  }
}

export default events