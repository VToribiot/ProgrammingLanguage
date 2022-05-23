package Activities

uses java.util.*
uses java.net.*

class Network {

  static function URLReader(s : String){
    var url = new URL(s)
    var URLreader = new Scanner(url.openStream())
    while (URLreader.hasNextLine()){
      var data = URLreader.nextLine()
      print(data)
    }
  }

  static function main(args : String[])
  {
    print("Enter an URL: ")
    var sc = new Scanner(System.in)
    var text = sc.nextLine()
    URLReader(text)
  }

}