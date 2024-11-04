function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = "ABC0C1";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





/* var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}*/


document.addEventListener('DOMContentLoaded', loadProfileData);

function loadProfileData() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {};

    document.getElementById('username').value = profileData.username || '';
    document.getElementById('dietPreference').value = profileData.preferences?.dietPreference || 'None';
    document.getElementById('workoutType').value = profileData.preferences?.workoutType || 'Strength';
    document.getElementById('workoutNotification').checked = profileData.notifications?.workout || false;
    document.getElementById('goalsNotification').checked = profileData.notifications?.goals || false;
}

function showSettingsTab(tab) {
    document.querySelectorAll('.settings-tab').forEach(el => el.style.display = 'none');
    document.getElementById(`${tab}Settings`).style.display = 'block';
}

function showAccountOption(option) {
    document.getElementById('usernameSection').style.display = option === 'username' ? 'block' : 'none';
    document.getElementById('passwordSection').style.display = option === 'password' ? 'block' : 'none';
}

function updateUsername() {
    const username = document.getElementById('username').value;
    if (username) {
        saveToProfileData('username', username);
        alert('Username updated successfully!');
    } else {
        alert('Please enter a valid username.');
    }
}

function updatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordMessage = document.getElementById('passwordMessage');

    if (password && password === confirmPassword) {
        saveToProfileData('password', password);
        passwordMessage.textContent = 'Password updated successfully!';
        passwordMessage.style.color = 'green';
    } else {
        passwordMessage.textContent = 'Passwords do not match!';
        passwordMessage.style.color = 'red';
    }

    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}

function updatePreferences() {
    const workoutType = document.getElementById('workoutType').value;
    const weightType = document.getElementById('weightType').value;

    saveToProfileData('preferences', { workoutType});
    saveToProfileData('preferences', { weightType});

    alert('Preferences updated successfully!');
}

function updateNotifications() {
    const workoutNotification = document.getElementById('workoutNotification').checked;
    const goalsNotification = document.getElementById('goalsNotification').checked;

    saveToProfileData('notifications', { workout: workoutNotification, goals: goalsNotification });
    alert('Notification settings updated!');
}

function saveToProfileData(key, value) {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {};
    profileData[key] = value;
    localStorage.setItem('profileData', JSON.stringify(profileData));
}
