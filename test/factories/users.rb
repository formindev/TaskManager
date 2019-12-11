FactoryBot.define do
  factory :user do
<<<<<<< HEAD
    first_name
    last_name
    password
    email
=======
    first_name { "MyString" }
    last_name { "MyString" }
    password { "" }
    email { "MyString@MyString.com" }
    avatar { "MyString" }
    type { "" }
>>>>>>> feature/travis
  end
end
