# blog-diplom (Login, Registration, Home, Posts pages)

//-----Node version---------------------------------------
v16.15.1

//-----React version----------------------------------------
v18.2

//-----React-Redux version----------------------------------------
v8.0.2

//-----React-Saga version----------------------------------------
v1.2.1


//-----To run project---------------------------------------
Steps in terminal:
1. To install used in project packages
    ### `yarn install` 
2. Run project:
    ### `yarn start`

Open http://localhost:3000 in the browser.


//-----Structure project------------------------------------
- blog-diplom/
  |
- src/
  | App.module.css
  | firebase.js
  | index.css
  | index.tsx
  | logo.svg
  | Navigation.tsx
  | react-app-env.d.ts
- api/
  | appApi.ts
- components/
  | forms/
  |  Form.ts
  |  ValidationForm.tst
  | posts/
  |  AddPost.ts
  |  EditPost.ts
  |  PostItem.ts
  |  SearchPost.ts
  | users/
  |  Logout.tsx
- core
  | hooks/
  |  reduxHooks.ts 
  |  useAuth.ts
  | sagas/
  |  authSaga.ts
  |  index.ts
  |  postsSaga.ts
  | services/
  |  AuthService.ts
  |  BaseService.ts
  | store/
  |  slice/ 
  |   postsSlice.ts     
  |  reduxStore.ts
  |  saga.ts
- pages
  | Home/
  |  Home.tsx
  | Login/
  |  Login.tsx
  |  Login.module.css
  | Posts/
  |  Post.tsx
  |  Post.module.css
  | Registration/
  |  Registration.tsx
  |  Registration.module.css
- types/
  | auth.ts
  | posts.ts
  | user.ts


//-----Resources--------------------------------------------
Authorisation was created with google firebase platform:  https://firebase.google.com

Posts data from: https://jsonplaceholder.typicode.com/users

Basic styles from: https://mui.com/

## User data for test app:
email: bloguser@bloguser.com
password: 1234567



 
    



  
  