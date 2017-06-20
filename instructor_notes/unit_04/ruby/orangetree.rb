require 'pry'

class OrangeTree
    attr_accessor :height

    def initialize height
        @height = height
        @age = 0
    end

    def count_the_oranges
        "There are #{@oranges} oranges"
    end

    def pick_an_orange
        @oranges -= 1 unless @oranges == 0

        "You have no oranges"
    end
    
    def one_year_passes
        @age += 1
        @height += 1
        puts "The tree is #{@age} years old"
        puts "The tree is #{@height} feet tall"
        
        if @age >= 5
            @oranges = 20
        end
        
        if @age == 50
            @age = 0
            @height = 0
            puts "The tree died"
        end
        
    end
end

binding.pry