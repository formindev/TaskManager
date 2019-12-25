FactoryBot.define do
  factory :task do
    name
    description
    assignee_id { nil }
  end
end
