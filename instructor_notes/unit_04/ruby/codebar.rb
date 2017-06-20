require 'pry'

class Member
  attr_accessor :full_name
# each member class should also have a full_name 

  def introduce
    # should 'put' (print out) "Hi, my name is " and whatever the person's name is
    puts "Hi, my name is #{self.full_name}"
  end

  def set_full_name(first_name, last_name)
    @full_name = first_name + " " + last_name
  end
end

class Student < Member
  attr_accessor :first_name, :last_name, :reason  

  def initialize(first_name, last_name, reason)
    set_full_name(first_name, last_name)
    @reason = reason
  end
  
end

class Instructor < Member
  attr_accessor :bio, :skills, :first_name, :last_name
  def initialize(first_name, last_name, bio)
    #write initialize method to save name and bio instance variables 
    # (and maybe skills instance variable)
    @bio = bio
    @skills = []
    set_full_name(first_name, last_name)
  end
  
  def add_skill(skill)
    #write code to add skills to the @skills instance variable
    @skills << skill
  end
  
end

class Workshop
  attr_accessor :students, :instructors, :date, :classroom

  def initialize(date, classroom)
    @date = date
    @classroom = classroom
    #what about the 'group' of students or 'group' of instructors?
    @students = []
    @instructors = []
  end

  def add_participant(member)
    if member.class == Student
      # checking whether or not the participant we're adding is a 
      # student or instructor via the ruby .class method
      @students << member
    else
      @instructors << member
    end
  end

  def print_details
    puts "Workshop - #{self.date} - Classroom: #{self.classroom}"
    puts
    puts "Students"
    @students.each_with_index do |student, index|
      puts "#{index + 1}. #{student.full_name} - #{student.reason}"
    end
    puts
    puts "Instructors"
    @instructors.each_with_index do |instructor, index|
      puts "#{index + 1}. #{instructor.full_name} - #{instructor.skills.join(", ")}"
      puts "#{instructor.bio}"
    end
  end
  
end

# workshop = Workshop.new("12/03/2014", "CR6")

# jane = Student.new("Jane", "Doe", "I am trying to learn programming and need some help")
# lena = Student.new("Lena", "Smith", "I am really excited about learning to program!")
# vicky = Instructor.new("Vicky", "Ruby", "I want to help people learn coding.")
# vicky.add_skill("HTML")
# vicky.add_skill("JavaScript")
# nicole = Instructor.new("Nicole", "McMillan", "I have been programming for 5 years in Ruby and want to spread the love")
# nicole.add_skill("Ruby")

# workshop.add_participant(jane)
# workshop.add_participant(lena)
# workshop.add_participant(vicky)
# workshop.add_participant(nicole)
# workshop.print_details
# binding.pry