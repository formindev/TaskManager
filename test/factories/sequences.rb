FactoryBot.define do
  sequence :email do |n|
    "test.email#{n}@factory.com"
  end
  sequence :first_name do |n|
    "test_name#{n}"
  end
  sequence :last_name do |n|
    "test_lname#{n}"
  end
  sequence :password do |n|
    "test_password#{n}"
  end
  sequence :name do |n|
    "test_task_name#{n}"
  end
  sequence :description do |n|
    "test_task_desc#{n}"
  end
end
