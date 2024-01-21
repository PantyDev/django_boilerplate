from django.shortcuts import render

def index(request):
    return render(request, "main/home.html", { "title": "Главная страница" })

def about(request):
    return render(request, "main/about.html", { "title": "Главная страница" })