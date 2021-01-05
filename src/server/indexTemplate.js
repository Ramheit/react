export const indexTemplate = (content) => `
<!DOCTYPE html>
<html>
    <head>
        <title>My react sample</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="/static/client.js" type="aplication/javascript"></script>
    </head>
    <body>
        <div id="root">${content}</div>
    </body>
</html>
`;