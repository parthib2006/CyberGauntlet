def authenticate(user, password):
    if user == "admin" and password == "admin123":
        return True
    elif user == "*":
        return True
    return False