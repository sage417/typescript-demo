/**
 * Created by J.K.SAGE on 2016/7/23 0023.
 */
let  isDone:boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

sentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

let list:number[] = [1,2,3];
let list:Array<number> = [1,2,3];

let x:[string,number];
x = ["hello", 10];
x[3] = "world";

enum Color {Red, Green, Blue};
let c:Color = Color.Red;

let colorName:string = Color[1];

let notSure:any = 4;
notSure = "maybe a string instead";
notSure = false;

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list: any[] = [1, true, "free"];

list[1] = 100;

function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
