package Activities

uses java.io.*
uses java.util.*

class Files {
  static function main(args : String[]){
    try {
      var writer = new FileWriter("TestFile.txt")
      writer.write("This is part 2 of the message. Now is reading time")
      writer.close()
      print("Succesfully Done")
    } catch (IOExcpetion){
      print("An error just ocurred")
    }

    try{
      var file = new File("TestFile.txt")
      var reader = new Scanner(file)
      while (reader.hasNextLine()){
        var line = reader.nextLine()
        print(line)
      }
      reader.close()
    } catch(FileNotFoundException){
      print("An error just ocurred")
    }
  }

}