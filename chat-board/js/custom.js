

let UserList = [
    {
        id: 1,
        Name: 'Made Savage',
        Thumbnail: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    }, {
        id: 2,
        Name: 'Angel Egotrip',
        Thumbnail: 'https://t3.ftcdn.net/jpg/06/01/50/96/360_F_601509638_jDwIDvlnryPRhXPsBeW1nXv90pdlbykC.jpg',
    }, {
        id: 3,
        Name: 'Binary Bark',
        Thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWomPds9w5emH_C6RY8xF7KRCJe6I5zwVsuw&usqp=CAU',
    }, {
        id: 4,
        Name: 'Blu Zoo',
        Thumbnail: 'https://media.istockphoto.com/id/1455774160/photo/young-man-relaxing-at-home-in-kitchen-holding-hot-drink-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=5QObtDOf4veZfnzLgiJk2D4DOAQbzbSpa0h6pw1ws1I=',
    }, {
        id: 5,
        Name: 'Zig Wagon',
        Thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&usqp=CAU', 
    }, {
        id: 6,
        Name: 'Droolbug',
        Thumbnail: 'https://media.istockphoto.com/id/1279955006/photo/watching-funny-video.jpg?s=612x612&w=0&k=20&c=Ld3VXNhiJW0E0KelkKlBV84rqFeWwdNSnAfr8sqxsPE=',
    }, {
        id: 7,
        Name: 'Armor of Odd',
        Thumbnail: 'https://t3.ftcdn.net/jpg/03/70/29/26/360_F_370292674_QS5nA0bJgyRD6VzYycTQdSWhhSHQJbQZ.jpg',
    }, {
        id: 8,
        Name: 'K For Kun',
        Thumbnail: 'https://media.istockphoto.com/id/1309315007/photo/profile-picture-of-smiling-caucasian-male-employee.jpg?s=612x612&w=0&k=20&c=pBsE_puKWiV9Pru3FWNPiYiDBnTp2k6x1PMjqZA8FHo=',
    }, {
        id: 9,
        Name: 'Sugar Lump',
        Thumbnail: 'https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg',
    }, {
        id: 10,
        Name: 'Binary Bark',
        Thumbnail: 'https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=',
    }, {
        id: 11,
        Name: 'Mindhack Diva',
        Thumbnail: 'https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp',
    }, {
        id: 12,
        Name: 'Geez God',
        Thumbnail: 'https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg',
    }, {
        id: 13,
        Name: 'Raid Brigade',
        Thumbnail: 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=',
    }, {
        id: 14,
        Name: 'Fiddle Pie',
        Thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbkDJb2e-xT_N0Nzk10MyfwG5t2ALyffYmTHHRhaUdotj93YLwQaYJXVSHDOMGTIYhn0&usqp=CAU',
    }, {
        id: 15,
        Name: 'The Deal',
        Thumbnail: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=',
    }
]

const BOT_MSGS = [
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :("
];

var clockElement = document.getElementById('clock');
function clock() {
  clockElement.textContent = new Date().toLocaleTimeString("en-US", { hour12: false, hour: 'numeric', minute: 'numeric' });
}

setInterval(clock, 1000);


UserList.forEach(({ id, Name, Thumbnail }, index) => {
    const User_Items = `<li class="user_items" data-User-Id="${index}" onclick="UserClickd(${index})"><div class="user_image"><img src="${Thumbnail}" alt="" class="image_cover"></div><div class="name_message"><h5 class="name">${Name}</h5><p class="message">message</p></div></li>`
    $('.user_list_ul').append(User_Items)
});

function UserChatShow(UserId) {
    $('.chat_item_wpr').empty();
    UserListLocal = GetLocalchat('UserData'); 
    if (UserListLocal[UserId].message) {
        UserListLocal[UserId].message.map((items, index) => {
            let Message = `<div class="chat_item ${items.Status}"><p>${items.Text}</p></div>`
            $('.chat_item_wpr').append(Message);
        })
        let scrollVal = $(".chat_item_wpr").outerHeight();
        $(".chat_content").animate({ scrollTop: scrollVal }, 'slow');
    } else {
        console.log('false');
    }

}

function AddMessage(userID, Text, Status) { 
    UserListLocal = GetLocalchat('UserData');
    let newObj = { Text, Status }
    let newData = UserListLocal.map((items, index) => {
        if (userID === index) {
            if (items.message) {
                return {
                    ...items,
                    message: [...items.message, newObj]
                };
            } else {

                return { ...items, message: [newObj] }
            }
        }
        return items
    })
    return newData;
}

function UserClickd(UserId) {
    $('.user_list').removeClass('show');
    $('.user_chat_container').addClass('show');
    $('#userName').text(UserList[UserId].Name)
    $('#userName').attr('data-User-Id', UserId) 
    var UserListLocal = GetLocalchat('UserData');
    if (UserListLocal.length === 0) {
        SaveLocalChat('UserData', UserList);
    } else {
        if (!UserListLocal[UserId].message) {
            $('#say_Hii').removeClass('d-none');
            $('.chat_item_wpr').addClass('d-none');
        } else {
            $('#say_Hii').addClass('d-none');
            $('.chat_item_wpr').removeClass('d-none');
        }
        SaveLocalChat('UserData', UserListLocal);
    }
    UserChatShow(UserId);

}

function BackClicked(UserId) {
    $('.user_list').addClass('show');
    $('.user_chat_container').removeClass('show');
    $('#userName').text('')
    $('#say_Hii').removeClass('d-none');
}

$('#say_Hii').click(function () {
    const userID = $('#userName').attr('data-User-Id')
    $(this).addClass('d-none');
    $('.chat_item_wpr').removeClass('d-none');
    $('#typing').removeClass('d-none')
    SaveLocalChat('UserData', AddMessage(Number(userID), 'Hii', 'receive_chat'));
    UserChatShow(Number(userID));
    setTimeout(() => {
        SaveLocalChat('UserData', AddMessage(Number(userID), 'Hi, how are you?', 'send_chat'));
        UserChatShow(Number(userID));
        $('#typing').addClass('d-none')
    }, 500);
})

const SendMessage = (userID,UniqueNum) => {
    $('#typing').addClass('d-none') 
    SaveLocalChat('UserData', AddMessage(Number(userID), BOT_MSGS[UniqueNum], 'send_chat'));
        UserChatShow(Number(userID));
}

$('.send_btn button').click(function () {
    if ($('#chat_input').val() !== '') {
        $('#say_Hii').addClass('d-none')
        const userID = $('#userName').attr('data-User-Id')
        $('.chat_item_wpr').removeClass('d-none'); 
        SaveLocalChat('UserData', AddMessage(Number(userID), $('#chat_input').val(), 'receive_chat'));
        UserChatShow(Number(userID));

        $('#chat_input').val('');
        $('#typing').removeClass('d-none')

        

        setTimeout(() => {
            SendMessage(userID,Math.floor(Math.random() * BOT_MSGS.length))
        }, 500);
    }
})


function GetLocalchat(LocalKey) {
    const storedTasks = localStorage.getItem(LocalKey);
    return storedTasks ? JSON.parse(storedTasks) : [];
}

function SaveLocalChat(LocalKey, data) {
    localStorage.setItem(LocalKey, JSON.stringify(data));
}


