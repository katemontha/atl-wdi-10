require 'pry'

class Group
    attr_accessor :people

    def initialize initial_people = []
        @people = initial_people
        count = @people.length
    end
    
    def add_person person
        @people.push person
    end

    def everyone_hello
        @people.each do |person|
            person.say_name
        end
    end
end


class Person
    attr_accessor :name, :age
    @@count = 0

    def initialize(name:, age:)
        @name = name
        @age = age
        @@count += 1
    end
    
    def say_name
        puts "hello my name is #{@name}"
    end
    
    def self.count
        @@count
    end

    def can_vote?
        @age >= 18
    end

    def who_is_older person1, person2
        if person1.age > person2.age
           puts "#{person1.name} is older that #{person2.name}"
        elsif person1.age < person2.age
           puts "#{person2.name} is older that #{person1.name}"
        end
    end
end

binding.pry