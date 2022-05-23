package Activities

uses java.io.*

class Stream {

  static function makeItDouble(n : float) : float{
    return n * 2
  }

  static function main(args : String[]){
    var sc = new Scanner(System.in)
    print("Enter any number: ")
    var number = sc.nextFloat()
    print(makeItDouble(number))
  }
}