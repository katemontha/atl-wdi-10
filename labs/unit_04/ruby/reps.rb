def fizzbuzzer(arg)
    if arg % 3 == 0 && arg % 5 == 0
        puts "fizzbuzz"
    elsif arg % 3 == 0
        puts "fizz"
    elsif arg % 5 == 0
        puts "buzz"
    else
        puts "sorrels"
    end
end

fizzbuzzer(3)

array_to_test = [ ["Husker","Adama"], ["DrRobotmck"], [] ]
hasher(array_to_test)  # => {"Husker" => "Adama", "DrRobotmck" => nil}

def hasher(array)
    array.length.times do |hash|
        if hash.length == 2
            
        end
    end
end
