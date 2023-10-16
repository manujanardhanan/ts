let user: string = "elon";
let array: (number | string)[] = [45, 33, 44, "elonmusk"]; //union

// interface
interface Users {
  name: string;
  age: number | string;
  getName: () => void;
}
// type
type Users2 = {
  name: string;
  age: number;
  getName?: () => void; // optional
};

let details: Users2 = {
  name: "manu",
  age: 39,
  getName() {
    console.log(this.name);
  },
};

function getUserDetails(user: Users): boolean {
  return false;
}

function getUserDetailsNew({
  name,
  islogged,
}: {
  name: string;
  islogged: boolean;
}): boolean {
  return islogged;
}

//Named types
type StatusType = "Pending" | "Success" | "Failed";

// Exclude utility
const excludeSample: Exclude<StatusType, "Failed"> = "Success";

interface StatusTy {
  status: "Pending" | "Success" | "Failed";
}

let curStatus: StatusType = "Pending";

//Function overloading
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;
function add(num1: any, num2: any): any {
  return num1 + num2;
}

let res1 = add(1, 2);
let res2 = add("mm", "oo");
//let res3 = add('s',3)

//Generics

function getAge<T>(age: T): T {
  return age;
}

let newage = getAge<String>("30");
let newagenum = getAge<Number>(39);

type UserDetailsType = {
  name: string;
  age: number;
};

//if interface then => interface AdminDetailsType extends UserDetailsType {role:string}
type AdminDetailsType = UserDetailsType & {
  role: string;
};

function getDetails<T>(details: T): T {
  return details;
}

const userDetails: UserDetailsType = { name: "test", age: 40 };

const dresul = getDetails<UserDetailsType>(userDetails);

// enum
enum statType {
  PENDING = 1,
  COMPLETED,
  FAILED,
}

enum reqType {
  SUCCESS = "s",
  ERROR = "e",
}

let userName = "manoo" as const;
//userName = 'dd';

const StatTypes = {
  PENDING: 0,
  COMPLETED: 1,
  FAILED: 2,
} as const;
let sample: keyof typeof StatTypes;

// Readonly utility
type AgentType = {
  name: string;
  age: number;
  yearsSin: string;
};
const agentDetails: Readonly<AgentType> = {
  name: "testagent",
  age: 20,
  yearsSin: "4",
};

//Partial utility
const partialSample: Partial<AgentType> = {
  name: "testing",
};
// pick utility
const agentname: Pick<AgentType, "name"> = { name: "tester" };

// omit utility

const omitample: Omit<AgentType, "yearsSin"> = {
  name: "testing",
  age: 20,
};

// Record utility

type NewType = Record<string, number>;

//same as below, but in another representation of dynamic type
type NewTypeOther = {
  [index: string]: number;
};

const emply: NewType = {
  test: 23,
  test2: 24,
};

// never & void

function throwError(message: string): never {
  throw new Error(message);
}

function logMsg(msg: string): void {
  console.log(msg);
}

// function type

type EmployeeType = {
  name: string;
  geDetails: (id: number) => string;
};

const empl: EmployeeType = {
  name: "testing",
  geDetails(nu) {
    console.log(nu);
    return "hello";
  },
};

// null

let username: string | null = null;

// tsc --init
