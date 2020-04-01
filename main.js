$(document).ready(function() { //JQuery - knows when the query is ready 
   $('#SearchUser').on('keyup', function(e){ //Catches what we type using the id 'SearchUser' with an event handler keyup
       let username = e.target.value; //variable to catch what is typed in the input

       //Ajax Request for Github API 
       $.ajax({
            url: 'https://api.github.com/users/'+username, //API url concat with the username variable
            data:{ //API Token 
                client_id:'84c22412a1527ec5d71d', //Client ID
                client_secret:'dfdfd5fb3a8375cc42e15070164b8010999277a4' //Client Secret 
            }
       }).done(function(user){ //Returns a promise taking a callack function of username data as user
            console.log(user);
            //Using the div id=profile from index.html show data in html 
            $('#profile').html(`    
                <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">${user.name}</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="thumbnail avatar" src="${user.avatar_url}">
                            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">Open on GitHub</a>
                            </div>
                        <div class="col-md-9">
                        <span class="label label-success"> Public Repositories: ${user.public_repos}</span>
                        <br>
                        <ul class="list-group">
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Website: ${user.blog}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                        <li class="list-group-item">Bio: ${user.bio}</li>
                        </ul>
                        </div>
                        </div>
                </div>
                </div>
            `);
       });
   });
});