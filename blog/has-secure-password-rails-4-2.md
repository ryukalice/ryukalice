---
title: 'has_secure_password は rails 4.2 から空白のパスワードを許容する'
date: '2015-06-10'
category: 'Ruby on Rails'
---

タイトルの通りです。つまり、rails 4.2 以降、このテストはパスしません。

```rb
  describe "when password is not present" do
    before do
      @user = User.new(name: "Example User", email: "user@example.com",
                        password: " ", password_confirmation: " ")
    end
    it { should_not be_valid }
  end
```

```bash
1) User when password is not present should not be valid
     Failure/Error: it { should_not be_valid }
       expected #<User id: nil, name: "Example User", email: "user@example.com", created_at: nil, updated_at: nil, password_digest: "$2a$04$ngYI0IcDdJLBmS2bztkXNuj0a0FdgFpu3q60e9i/pVC..."> not to be valid
```
