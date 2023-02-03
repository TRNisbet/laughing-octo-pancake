
# Got mains to run to display UI with Test
from website import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)