# urls.py
urls = [
    {"path": '/save-data', "views": 'save_data'}
]

# Views
def save_data(request):
    data = {
        'username': '',
        'name': ''
    }

    if request.method == 'POST':
        data.username = request.POST.get('username')
        data.name = request.POST.get('name')
    # Queryset to save the data
    data.save()


    return JSONResponse({
        message: 'data saved successfully'
    })


# models.py

class User():
    username=charField()
    user = charField()
