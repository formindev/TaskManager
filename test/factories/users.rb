FactoryBot.define do
  factory :user do
    first_name { "MyString" }
    last_name { "MyString" }
    password { "" }
    email { "MyString@MyString.com" }
    avatar { "MyString" }
    type { "" }
  end
end
