FactoryBot.define do
  sequence :email do |n|
    "test.email#{n}@factory.com"
  end
  sequence :string do |n|
    "test_string#{n}"
  end
end
