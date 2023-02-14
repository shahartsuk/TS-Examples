// const dict:{[key:string]:number} = {};

//<T> get the type of a value i give him
class Dictionary<T> {
  //like that the key is identity T can be anything the is the Value of the curr key
  private _dict: { [key: string]: T } = {};

  public getValueByKey(key: string): T | null {
    if (this._dict[key]) {
      return this._dict[key];
    } else {
      return null;
    }
  }

  public setValueByKey(key: string, value: T): void {
    if (this._dict[key]) {
      throw new Error("Key already exists");
    } else {
      this._dict[key] = value;
    }
  }

  public deleteByKey(key: string): void {
    if (this._dict[key]) {
      //Deletes the dictionary place
      delete this._dict[key];

      //set the value to null in the dictionary place
      //this._dict[key] = null;
    } else {
      throw new Error("Key already exists");
    }
  }
}

const d: Dictionary<string> = new Dictionary();

try {
  //key- string hello his value is string - hello
  d.setValueByKey("hello", "hello");
  d.setValueByKey("world", "world");

  console.log(d.getValueByKey("hello"));

  d.setValueByKey("bye", "bye");

  //d.setValueByKey("hello", "world"); //error cant create 2 keys with the same value
} catch (error) {
  console.error(error);
}
