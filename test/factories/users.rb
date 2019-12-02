FactoryBot.define do
  factory :user do
    first_name { generate :string }
    last_name { generate :string }
    password { generate :string }
    avatar { generate :string }
    type { "" }
    email
  end
end
