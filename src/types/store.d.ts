declare namespace REDUX_STORE {
  interface IStore {
    profile?: Profile;
  }

  interface Profile {
    name: string;
    phone: string;
  }
}
