package Activities

uses java.io.*

class Files {
  static function main(args : String[]){
    try {
      var writer = new FileWriter("TestFile.txt")
      writer.write("This is a test text for the Programming Language Activity")
      writer.close()
      print("Succesfully Done")
    } catch (IOExcpetion){
      print("An error just ocurred")
    }
  }

}