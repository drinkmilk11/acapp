from django.http  import HttpResponse

def index(requst):
    line = '<h1 style="text-align: center">我们是冠军！！！！</h1>'
    line4 = '<a href = "/play">进入游戏界</a>'
    line3 = '<hr>'
    line2 = '<img src="https://th.bing.com/th/id/OIP.ILzadP88tH9Pg4OH_XRjCgHaEK?w=299&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" width = 2000>'
    return HttpResponse(line + line4 + line3 + line2)

def play(requst):
    line1 = '<h2 style = "text-align: center">it\'s my future!!!</h2>'
    line2 = '<a href = "/">反方向的钟</a>'
    return HttpResponse(line1 + line2)
# Create your views here.
