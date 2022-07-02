function slot() {
    let show = document.getElementById("slot");
    // console.log(show.classList)
    // show.classList.replace("All-Agent-hidden","All-Agent-show") 
    // console.log(show.classList)
    if (show.classList.contains("All-Agent-show")) {
        show.classList.replace("All-Agent-show","All-Agent-hidden") 
    }
    else if (show.classList.contains("All-Agent-hidden")) {
        show.classList.replace("All-Agent-hidden","All-Agent-show") 
    }
    
}
let skillQText = "Q - HEADHUNTER\n\nใช้งานเพื่อติดตั้งปืนพกหนัก ใช้ปุ่มยิงเสริมเมื่อติดตั้งปืนพกเพื่อเล็งผ่านลำกล้อง"
let videoQHtml = "<video autoplay mute loop src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4 >"
function skillQ() {
    let Q = document.getElementById("DA-S");
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = videoQHtml
    Q.innerText = skillQText
}

let skillEText = "E - RENDEZVOUS\n\nวางจุดเทเลพอร์ตสองจุด เมื่อยืนอยู่บนพื้นและอยู่ในระยะของจุดเทเลพอร์ต \nกดใช้อีกครั้งเพื่อเทเลพอร์ตอย่างรวดเร็วไปยังจุดเทเลพอร์ตอีกจุดหนึ่ง \nจุดเทเลพอร์ตสามารถเก็บขึ้นมาได้เพื่อติดตั้งใหม่"
let videoEHtml = "<video autoplay mute loop src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1c12ab8f1c119bc/618d9fd2fb61e4021ad339f0/VAL_broll_EP03-3_Chamber_E.mp4 >"
function skillE() {
    let E = document.getElementById("DA-S");
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = videoEHtml
    E.innerText = skillEText
}

let skillCText = "C - TRADEMARK\n\nวางกับดักที่จะทำการสแกนศัตรู เมื่อมีศัตรูที่มองเห็นได้เข้ามาในระยะ \nกับดักจะทำการนับถอยหลังแล้วจากนั้นจะทำให้พื้นที่รอบ ๆเกิดความไม่เสถียร \nสร้างเป็นพื้นที่ที่จะสโลว์ผู้เล่นที่อยู่ในนั้น"
let videoCHtml = "<video autoplay mute loop src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318d4a246e29106a/618d9fdbf71a3113890e9632/VAL_broll_EP03-3_Chamber_C.mp4 >"
function skillC() {
    let C = document.getElementById("DA-S");
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = videoCHtml
    C.innerText = skillCText
}

let skillXText = "X - TOUR DE FORCE\n\nกดใช้เพื่อเรียกใช้ปืนสไนเปอร์เฉพาะตัวแรงสูงซึ่งจะสังหารศัตรูโดยทันทีหากถูกยิงโดยตรง \nการสังหารศัตรูจะสร้างพื้นที่ที่จะสโลว์ผู้เล่นที่อยู่ในนั้นตรงจุดที่ศัตรูถูกสังหาร"
let videoXHtml = "<video autoplay mute loop src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta111e90b3f2ce476/618d9fde3b08dd14d79a808f/VAL_broll_EP03-3_Chamber_X.mp4 >"
function skillX() {
    let X = document.getElementById("DA-S");
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = videoXHtml
    X.innerText = skillXText
}


function chooseJett(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่DUELIST\n\n//ชีวประวัติ \n\nเข้าร่วมรบในฐานะตัวแทนบ้านเกิดของเธอจากประเทศเกาหลีใต้ สไตล์การต่อสู้ที่แสนคล่องตัวและสง่างามของ Jett ทำให้เธอสามารถเผชิญหน้ากับความเสี่ยงในแบบที่ไม่มีใครทำได้ เธอวิ่งวนไปทั่วความชุลมุน เชือดเฉือนศัตรูก่อนที่พวกเขาจะรู้ว่าสิ่งใดได้โจมตีพวกเขา"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png> "

    skillQText = "Q - UPDRAFT\n\nพัดพา Jett ให้ลอยขึ้นไปบนอากาศทันที"
    skillEText = "E - TAILWIND\n\nJett พุ่งตัวไปในทิศทางที่เธอกำลังเคลื่อนที่อยู่ทันที \nแต่หาก Jett ยืนนิ่งอยู่กับที่ เธอจะพุ่งตัวตรงไปข้างหน้า"
    skillCText = "C - CLOUDBURST\n\nโยนลูกบอลควันออกไปทันที โดยจะขยายตัวออกเป็นหมอกควันเพื่อบดบังวิสัยทัศน์\nเมื่อกระทบกับพื้นผิว กดปุ่มสกิลค้างไว้เพื่อโยนวิถีโค้งไปตามทิศทางเป้าเล็งของคุณ"
    skillXText = "X - BLADE STORM\n\nติดตั้งเซ็ตมีดบินสุดแม่นยำ ที่จะรีชาร์จเมื่อสังหารศัตรู กดยิงเพื่อขว้างมีดสั้นไปยังเป้าหมาย \nกดโหมดการยิงเสริมเพื่อขว้างมีดสั้นที่เหลือทั้งหมดไปยังเป้าหมาย"
    
    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4 >"
}

function chooseRaze(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " // หน้าที่DUELIST\n\n// ชีวประวัติ \n\nระเบิดออกจากบราซิลด้วยบุคลิกภาพที่เข้ากับคนอื่นได้ง่ายและปืนอันใหญ่โตของเธอ ด้วยสไตล์การเล่นอันดุเดือด เธอจึงเก่งกาจในการกวาดล้างศัตรูและสร้างช่องว่างด้วยเสียง ตู้ม! จำนวนมหาศาล"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltdb74f287eee9fe76/5eaf862a248a28605479c91f/TX_Raze_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb0eb89e122c1f4ea/5eaf862ad238e314f259fa8b/TX_Raze_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44acc030d4d60182/5eaf862aa20afe612d82fb4e/TX_Raze_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt60023b671f330740/5eaf862ae6f6795e530a2717/TX_Raze_X.png > "

    skillQText = "Q - BLAST PACK \n\nโยน Blast Pack ที่จะยึดติดกับพื้นผิวทันที กดใช้งานสกิลอีกครั้งหลังจากปล่อยออกไป\nเพื่อจุดชนวนระเบิดที่จะสร้างดาเมจและผลักทุกสิ่งที่ถูกกระทบออกไป"
    skillEText = "E - PAINT SHELLS \n\nติดตั้งระเบิดมือ กดยิงเพื่อโยนระเบิดมือออกไป การจุดชนวนจะสร้างดาเมจ\nและทำให้เกิดระเบิดลูกย่อย ๆ เพิ่มขึ้นมาอีก ซึ่งแต่ละลูกก็จะสร้างดาเมจกับทุกคนที่อยู่ในรัศมีของมัน"
    skillCText = "C - BOOM BOT \n\nติดตั้ง Boom Bot กดยิงเพื่อปล่อยบอทให้วิ่งไปบนพื้นเป็นเส้นตรง\nและจะกระดอนออกมาเมื่อชนกำแพง Boom Bot \nจะล็อกเป้าหมายบนศัตรูที่ตรวจพบและไล่ติดตามไป โดยจะทำการระเบิดอย่างรุนแรงเมื่อไปถึงศัตรู"
    skillXText = "X - SHOWSTOPPER \n\nติดตั้งเครื่องยิงจรวด \nกดยิงเพื่อปล่อยจรวดที่จะสร้างดาเมจในวงกว้างเมื่อกระทบกับสิ่งใด ๆ"
    
    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4 >"

}

function chooseBreach(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " // หน้าที่ INITIATOR \n\n// ชีวประวัติ \n\nสามารถยิงพลังระเบิดอันรุนแรงโดยมีพื้นที่ของศัตรูเป็นเป้าหมายในการเคลียร์เส้นทาง เขาจะสร้างความเสียหายและการก่อกวนเพื่อให้คู่แข่งต้องเผชิญกับอุปสรรคอันหฤโหดทุกครั้ง"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf7b0c621601e5577/5eaf863af66b2515dea76b40/TX_Breach_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt40b144165bebbb57/5eaf863aa20afe612d82fb54/TX_Breach_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd59235294cc21d88/5eaf863acf88d36e47cf02b1/TX_Breach_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb39bc3e8df9012dc/5eaf863ad238e314f259fa93/TX_Breach_X.png > "

    skillQText = "Q - FLASHPOINT \n\nติดตั้ง Blinding Charge กดยิงเพื่อปล่อยระเบิดที่ทะลุผ่านกำแพงอย่างรวดเร็ว \nระเบิดลำแสงจะบดบังวิสัยทัศน์ของผู้เล่นทุกคนที่มองลำแสง"
    skillEText = "E - FAULT LINE \n\nติดตั้ง Seismic Blast กดยิงค้างไว้เพื่อเพิ่มระยะทาง และปล่อยเพื่อสร้างแรงสั่นสะเทือน \nทำให้ผู้เล่นทั้งหมดที่อยู่ในพื้นที่และในแนวของการสั่นสะเทือนอยู่ในอาการมึนงง"
    skillCText = "C - AFTERSHOCK \n\nติดตั้ง Fusion Charge กดยิงเพื่อปล่อยระเบิดที่จะหน่วงเวลาในการยิงทะลุผ่านกำแพง \nระเบิดจะสร้างดาเมจอันรุนแรงแก่ผู้เล่นที่อยู่ในพื้นที่นั้น"
    skillXText = "X - ROLLING \n\nTHUNDERติดตั้ง Seismic Charge กดยิงเพื่อปล่อยแรงสั่นสะเทือนที่\nเคลื่อนผ่านได้ทุกพื้นที่เป็นรูปกรวยขนาดใหญ่ แรงสั่นสะเทือนจะทำให้ทุกคนที่ติดอยู่มึนงงและสิ้นสติ"
    
    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4 >"

}
function chooseOmen(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " // หน้าที่ CONTROLLER \n\n// ชีวประวัติ \n\nออกล่าในเงามืด ดั่งปีศาจแห่งความทรงจำ เขาทำให้ศัตรูตาสูญเสียการมองเห็น สามารถหายตัวข้ามสนาม แล้วก็ปล่อยให้ความหวาดระแวงเข้าครอบงำศัตรู ก่อให้เกิดความกลัวว่าเมื่อไหร่ที่เขาจะลงมืออีกครั้ง"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt323e0178def67d36/5eaf85f4cf88d36e47cf02a5/TX_Omen_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta95e6968cb32f519/5eaf85f44398082ffe24019b/TX_Omen_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7016fed86331500b/5eaf85f41b51e36d7c1b6ad6/TX_Omen_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd7b44696b74076d4/5eaf85f4f66b2515dea76b2c/TX_Omen_X.png > "

    skillQText = "Q - PARANOIA \n\nติดตั้ง Blinding Orb ยิงเพื่อโยนไป จะทำให้หูหนวกและลดช่วงวิสัยทัศน์ของผู้เล่นทุกคน\nที่สัมผัสกับมันเป็นเวลาสั้น ๆ ลูกกระสุนนี้สามารถทะลุผ่านกำแพง"
    skillEText = "E - DARK COVER \n\nติดตั้ง Shadow Orb และดูตัวบอกระยะผ่านกำแพง กดใข้สกิลเพื่อโยน Shadow Orb \nไปยังตำแหน่งที่กำหนดไว้เพื่อสร้างโดมเงาดำที่จะบดบังวิสัยทัศน์เป็นเวลานาน \nกดยิงค้างไว้ในขณะกำหนดเป้าหมายเพื่อขยับเป้าหมายให้ไกลออกไป \nกดยิงเสริมค้างไว้ในขณะกำหนดเป้าหมายเพื่อขยับเป้าหมายให้ใกล้เข้ามา \nกดรีโหลดเพื่อสลับเป็นมุมมองการกำหนดเป้าหมายปกติ"
    skillCText = "C - SHROUDED STEP \n\nติดตั้งสกิล Shrouded Step และดูตัวบอกระยะ \nกดยิงเพื่อทำการร่ายสั้น ๆ จากนั้นเทเลพอร์ตไปยังตำแหน่งที่กำหนดไว้ \nศัตรูสามารถได้ยินเสียงจากตำแหน่งที่ออกเดินทางเท่านั้น"
    skillXText = "X - FROM THE SHADOWS \n\nติดตั้งแผนที่ยุทธวิธี กดยิงเพื่อเริ่มทำการเทเลพอร์ตไปยังตำแหน่งที่กำหนดไว้ \nระหว่างการเทเลพอร์ต Omen จะปรากฏตัวเป็นร่างเงาที่สามารถถูกศัตรูทำลายได้ \nเพื่อหยุดยั้งการเทเลพอร์ต หรือ Omen สามารถกดติดตั้ง เพื่อยกเลิกการเทเลพอร์ต"
    
    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4 >"

}

function chooseBrimstone(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " // หน้าที่ CONTROLLER \n\n// ชีวประวัติ \n\nชายผู้เข้าร่วมจาก USA การโจมตีด้วย Orbital Arsenal ของ Brimstone ช่วยให้ทีมของเขาได้เปรียบเสมอ ทักษะในการส่ง Utility อย่างแม่นยำและจากระยะทางที่ไกลทำให้เขาเป็นผู้บัญชาการภาคพื้นดินที่ไม่มีใครเทียบได้"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29aa6cc80f1caa7b/5eaf8607af7e315106b47daa/TX_Brimstone_Q.png> "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7c9f45408b1bf6e8/5eaf8607d4b10d15d3e8db48/TX_Brimstone_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt71797e5088fa6920/5eaf8606b8a6356e4ddc100d/TX_Brimstone_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt68102861930b231f/5eaf8606f66b2515dea76b38/TX_Brimstone_X.png > "

    skillQText = "Q - INCENDIARY \n\nติดตั้งเครื่องยิงระเบิดเพลิง กดยิงเพื่อปล่อยระเบิดที่จะระเบิดเมื่อตกสู่พื้น \nก่อให้เกิดเปลวไฟที่จะสร้างความเสียหายกับผู้เล่นที่อยู่ในบริเวณนั้น"
    skillEText = "E - SKY SMOKE \n\nติดตั้งแผนที่ยุทธวิธี กดยิงเพื่อกำหนดตำแหน่งที่จะปล่อยหมอกควันของ Brimstone \nกดโหมดการยิงเสริมเพื่อยืนยันตำแหน่งและปล่อยหมอกควันที่จะบดบังวิสัยทัศน์\nในพื้นที่ที่กำหนดไว้เป็นเวลานาน"
    skillCText = "C - STIM BEACON \n\nติดตั้ง Stim Beacon กดยิงเพื่อวาง Stim Beacon \nไปยังเบื้องหน้าของ Brimstone เมื่อวางอยู่บนพื้น \nStim Beacon จะเพิ่มประสิทธิภาพในการยิงให้กับผู้เล่นในบริเวณนั้น"
    skillXText = "X - ORBITAL STRIKE \n\nติดตั้งแผนที่ยุทธวิธี กดยิงเพื่อปล่อยเลเซอร์ Orbital Strike ไปยังพื้นที่ที่กำหนด\n สร้างดาเมจที่จะเพิ่มความรุนแรงขึ้นเรื่อย ๆ กับผู้เล่นที่อยู่ในพื้นที่นั้น"
    
    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4 >"

}

function choosePhoneix(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " // หน้าที่ DUELIST \n\n// ชีวประวัติ \n\nส่งเสียงทักทายมาจากสหราชอาณาจักร พลังของ Phoenix ส่องแสงเรืองรองด้วยสไตล์การต่อสู้ของเขา เผาไหม้สนามรบให้เป็นจุณด้วยแสงสว่างและเปลวไฟ ไม่ว่าเขาจะมีทีมคอยสนับสนุนหรือไม่ เขาก็จะรีบเข้าไปในสงครามด้วยความตั้งใจของเขาเองเสมอ"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb125dfdcd673a9a8/5eaf85e95751b2150e57a803/TX_Pheonix_Q.png >"
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb239d633e68d9b65/5eaf85e94398082ffe240195/TX_Pheonix_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt40cafc8e39b4fcbd/5eaf85e903f6e72ff388cc1a/TX_Pheonix_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26ed15b080ee68b1/5eaf85e91b51e36d7c1b6ad0/TX_Pheonix_X.png > "

    skillQText = "Q - CURVEBALL \n\nติดตั้ง Flare Orb ที่จะวิ่งเป็นเส้นโค้งและระเบิด\nหลังจากขว้างออกไปไม่นาน กดยิงเพื่อปล่อย Flare Orb โค้งไปทางซ้าย ระเบิดและทำให้ผู้เล่นที่\nเห็นออร์บนั้นสูญเสียการมองเห็น กดโหมดการยิงเสริม\nเพื่อปล่อย Flare Orb โค้งไปทางขวา"
    skillEText = "E - HOT HANDS \n\nติดตั้งลูกบอลเพลิง กดยิงเพื่อขว้างลูกบอลเพลิงที่จะระเบิดหลังจากระยะเวลา\nที่กำหนดหรือเมื่อกระทบกับพื้น ทำให้เกิดบริเวณที่มีเพลิงไหม้ซึ่งจะสร้างดาเมจแก่ศัตรู"
    skillCText = "C - BLAZE \n\nติดตั้งกำแพงไฟ กดยิงเพื่อสร้างเส้นทางของไฟไปยังด้านหน้า \nทำให้เกิดกำแพงไฟที่จะบดบังวิสัยทัศน์และสร้างดาเมจแก่ศัตรูที่เดินผ่าน \nกดยิงค้างไว้เพื่อโค้งกำแพงตามทิศทางเป้าเล็งของคุณ"
    skillXText = "X - RUN IT BACK \n\nทำเครื่องหมายลงบนตำแหน่งของ Phoenix ในทันที \nการถูกสังหารหรือหมดเวลาขณะที่สกิลนี้ถูกใช้งานอยู่จะทำให้สกิลนี้สิ้นสุดลง \nและนำ Phoenix กลับสู่ตำแหน่งเดิมด้วยพลังชีวิตที่สมบูรณ์"
    
    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4 >"

}

function chooseSova(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " // หน้าที่ INITIATOR \n\n// ชีวประวัติ \n\nเกิดในฤดูหนาวอันยาวนานของทุ่งทุนดราของรัสเซีย เขาติดตาม ตามล่า และกำจัดศัตรูได้อย่างมีประสิทธิภาพและแม่นยำด้วยธนูพิเศษที่เขาดัดแปลงขึ้นมาเองและความสามารถในการล่าชั้นเลิศ ต่อให้คุณวิ่งหนีไปสุดขอบฟ้า ก็จะไม่มีวันรอดพ้นจากเงื้อมมือของเขา"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltebf4f748f87b2222/5eaf85dc4398082ffe24018f/TX_Sova_Q.png >"
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5084114604f20525/5eaf85b108d37e6d82ef74ef/TX_Sova_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt74a6f56b5c37edb5/5eaf85b1f66b2515dea76b26/TX_Sova_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5515bdb07fabe98/5eaf85b1b8a6356e4ddc1001/TX_Sova_X.png > "

    skillQText = "Q - SHOCK BOLT \n\nติดตั้งธนูด้วย Shock Bolt กดยิงเพื่อปล่อยลูกธนูระเบิดสายฟ้าไปข้างหน้า \nซึ่งจะระเบิดเมื่อปะทะและสร้างดาเมจแก่ผู้เล่นใกล้เคียง กดยิงค้างไว้เพื่อเพิ่มระยะการยิง \nกดโหมดการยิงเสริมเพื่อเพิ่มจำนวนการเด้งของลูกธนูได้ถึงสองครั้ง"
    skillEText = "E - RECON BOLT \n\nติดตั้งธนูด้วย Recon Bolt กดยิงเพื่อปล่อยลูกธนู Recon Bolt ไปข้างหน้า \nซึ่งจะทำงานเมื่อปะทะและเปิดเผยตำแหน่งของศัตรูใกล้เคียงที่อยู่ในรัศมีการมองเห็นของลูกธนู \nศัตรูสามารถทำลายลูกธนูนี้ได้ กดยิงค้างไว้เพื่อเพิ่มระยะการยิง \nกดโหมดการยิงเสริมเพื่อเพิ่มจำนวนการเด้งของลูกธนูได้ถึงสองครั้ง"
    skillCText = "C - OWL DRONE \n\nติดตั้ง Owl Drone กดยิงเพื่อปล่อยโดรนออกไปและควบคุมการเคลื่อนไหวของมัน \nกดยิงในขณะที่ควบคุมโดรนเพื่อยิงลูกดอกระบุตำแหน่ง\nซึ่งจะเปิดเผยตำแหน่งของผู้เล่นที่ถูกยิง"
    skillXText = "X - HUNTER’S FURY \n\nติดตั้งธนูด้วยระเบิดพลังงานสูงสามนัดที่สามารถยิงได้ไกลและทะลุกำแพงได้ \nกดยิงเพื่อปล่อยระเบิดพลังงานไปยังเบื้องหน้าของ Sova\nสร้างดาเมจและเปิดเผยตำแหน่งของศัตรูที่อยู่ในแนวการยิง สกิลนี้สามารถใช้ซ้ำได้อีกสองครั้งขณะที่\nยังอยู่ในระยะเวลาที่กำหนด"
    
    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4 >"

}

function chooseSage(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่SENTINEL\n\n//ชีวประวัติ \n\nเป็นเสมือนดั่งป้อมปราการของจีน เธอมอบความปลอดภัยแก่ตัวเองและเพื่อนร่วมทีมในทุกที่ที่เธอไปโดยอาศัยความสามารถในการชุบชีวิตเพื่อนร่วมทีมและการป้องกันการโจมตี เธอจึงเป็นศูนย์กลางของความสงบท่ามกลางสนามรบอันดุเดือด"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png>"
    let changerteaser_A = document.getElementById("video-A");
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4>"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt295acba83a83496d/5eaf85beb8a6356e4ddc1007/TX_Sage_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc6355bb295e64ba1/5efa55c138fa326e2aaf5c3f/TX_Sage_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt368b2f4136858aed/5eaf85becf88d36e47cf029f/TX_Sage_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt39a8fe8deb6389f8/5efa55d38732f51d8514604f/TX_Sage_X.png > "

    skillQText = "Q - SLOW ORB\n\nติดตั้ง Healing Orb กดยิงและใช้เป้าเล็งของคุณชี้\nเพื่อทำการสโลว์ฝั่งส"
    skillEText = "E - HEALING ORB\n\nติดตั้ง Healing Orb กดยิงและใช้เป้าเล็งของคุณชี้ไปยังพันธมิตรที่บาดเจ็บ\nเพื่อฮีลพวกเขาเป็นระยะเวลาหนึ่งกดโหมดการยิงเสริมขณะที่ Sage ได้รับบาดเจ็บ เพื่อฮีลตนเองเป็นระยะเวลาหนึ่ง"
    skillCText = "C - BARRIER ORB\n\nติดตั้ง Barrier Orb กดยิงเพื่อร่ายกำแพงสุดแข็งแกร่ง กดโหมดการยิงเสริมเพื่อหมุน"
    skillXText = "X - RESURRECTION\n\nติดตั้งสกิล Resurrection กดยิงและใช้เป้าเล็งของคุณชี้ไปที่ร่างของพันธมิตรที่เสียชีวิต\nเพื่อชุบชีวิตพวกเขาให้ฟื้นกลับมามีพลังชีวิตที่สมบูรณ์ภายในระยะเวลาสั้น ๆ"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4 >"
}

function chooseViper(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่CONTROLLER\n\n//ชีวประวัติ \n\nสาวนักเคมีชาวอเมริกันใช้อุปกรณ์ทางเคมีที่เป็นพิษเพื่อควบคุมสนามรบและทำลายวิสัยทัศน์ของศัตรู หากไม่ใช่พิษที่สังหารเหยื่อของเธอ ก็คงเป็นเกมสงครามเย็นของเธอนั่นแหละ"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab09d009a46f6c08/5eaf85a2cf88d36e47cf0299/TX_Viper_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3c4a5fda3e7e8f16/5eaf85a226a7212f2db1beb6/TX_Viper_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt93b26c70173b0875/5eaf85a3b8a6356e4ddc0ffb/TX_Viper_C.png > "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8698a8684bb39593/5eaf85a2f66b2515dea76b20/TX_Viper_X.png > "

    skillQText = "Q - POISON CLOUD\n\nติดตั้งระเบิดประจุควัน กดยิงเพื่อขว้างระเบิดที่จะคงอยู่ตลอดจนจบเกมออกไป\nกดใช้สกิลอีกครั้งเพื่อสร้างหมอกควันพิษด้วยเชื้อเพลิงที่มีอยู่\nสกิลนี้สามารถใช้ซ้ำได้และสามารถหยิบระเบิดกลับขึ้นมาเพื่อใช้งานอีกครั้ง"
    skillEText = "E - TOXIC SCREEN\n\nติดตั้งเครื่องปล่อยอุปกรณ์ประจุควัน กดยิงเพื่อติดตั้งอุปกรณ์ประจุควันเป็นแนวยาว\nกดใช้งานอีกครั้งเพื่อสร้างกำแพงควันพิษด้วยเชื้อเพลิงที่มีอยู่\nสกิลนี้สามารถใช้ซ้ำได้มากกว่าหนึ่งครั้ง    "
    skillCText = "C - SNAKE BITE\n\nติดตั้งเครื่องยิงสารเคมี ยิงเพื่อปล่อยกระป๋องที่จะระเบิดเมื่อตกถึงพื้น\nก่อให้เกิดพื้นที่เขตเคมีที่สร้างดาเมจให้กับศัตรู    "
    skillXText = "X - VIPER’S PIT\n\nติดตั้งเครื่องพ่นควันเคมี กดยิงเพื่อพ่นหมอกควันเคมีออกไปทุกทิศทางรอบ ๆ Viper\nสร้างกลุ่มหมอกควันขนาดใหญ่ซึ่งจะลดระยะการมองเห็นและค่าพลังชีวิตสูงสุดของผู้เล่นที่ติดอยู่ภายใน"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4 >"
}

function chooseCypher(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่SENTINEL\n\n//ชีวประวัติ \n\nนายหน้าขายข้อมูลแห่งโมร็อกโก เขาเป็นหน่วยเฝ้าระวังที่ทำงานคนเดียวเพื่อการตามติดความเคลื่อนไหวของศัตรูในทุกย่างก้าว ไม่มีความลับใดที่ปลอดภัย ไม่มีการหลบหลีกไหนที่รอดพ้นสายตา Cypher นั้นจับจ้องอยู่เสมอ"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta39b791956ecb79a/5eaf85fecf88d36e47cf02ab/TX_Cypher_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt834a6ba8d533a3b7/5eaf85feaf7e315106b47da4/TX_Cypher_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6397bce97bdb0ecd/5eaf85fef66b2515dea76b32/TX_Cypher_C.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf313af5404f8f80/5eaf85fee6f6795e530a2711/TX_Cypher_X.png > "

    skillQText = "Q - CYBER CAGE\n\nโยน Cyber Cage ไปยังเบื้องหน้าของ Cypher ทันที \nเปิดใช้งานเพื่อสร้างพื้นที่ที่จะบดบังวิสัยทัศน์\nและเริ่มเล่นเสียงแจ้งเตือนเมื่อศัตรูเดินผ่านมัน"
    skillEText = "E - SPYCAM\n\nติดตั้ง Spycam กดยิงเพื่อติดตั้ง Spycam บนตำแหน่งที่ต้องการ \nกดใช้สกิลนี้อีกครั้งเพื่อเข้าควบคุมตัวกล้อง\nกดยิงในขณะที่ควบคุมกล้องเพื่อปล่อยลูกดอกระบุตำแหน่ง \nลูกดอกจะเปิดเผยตำแหน่งของผู้เล่นที่ถูกยิงด้วยลูกดอกนี้    "
    skillCText = "C - TRAPWIRE\n\nติดตั้ง Trapwire กดยิงเพื่อติดตั้งในตำแหน่งที่ต้องการ ซึ่ง Tripwire \nนั้นสามารถถูกทำลายได้และอำพรางตัวเองได้โดยจะสร้าง\nเส้นตรงขึ้นมาระหว่างตำแหน่งที่ติดตั้งไว้กับกำแพงที่อยู่ฝั่งตรงข้าม \nศัตรูที่ข้ามผ่าน Tripwire จะถูกหน่วงไว้ เปิดเผยตำแหน่ง \nและอยู่ในอาการมึนงงเป็นระยะเวลาสั้น ๆ หากทำลายกับดักไม่ทันเวลา อุปกรณ์นี้สามารถหยิบกลับมาและใช้ซ้ำได้    "
    skillXText = "X - NEURAL THEFT\n\nใช้ร่างของศัตรูที่ถูกสังหารอยู่ในเบื้องหน้าของคุณเพื่อเปิดเผยตำแหน่งของศัตรูที่ยังมีชีวิตอยู่ทันที"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4 >"
}

function chooseReyna(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่DUELIST\n\n//ชีวประวัติ \n\nหล่อหลอมขึ้นมาจากใจกลางเม็กซิโก Reyna กุมอำนาจในการต่อสู้เดียว โผล่ออกมาพร้อมกับทำการสังหารแทบทุกครั้ง ความสามารถของเธอนั้นถูกจำกัดด้วยทักษะของเธอ ซึ่งทำให้ประสิทธิภาพของเธอนั้นขึ้นอยู่กับการเล่น"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf10078de1865cc3a/5eb7cf1e241e5e628430676c/TX_Reyna_Q.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f61a763092dca17/5eb7cf1e7e251a2d4a46fdb3/TX_Reyna_E.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1df6153d75480d43/5eb7cf1e8682422a765fc997/TX_Reyna_C.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte8a8889d3b17a9b9/5eb7cf1e1ea0c32e33b95fa6/TX_Reyna_X.png > "

    skillQText = "Q - DEVOUR\n\n Soul Harvest: ศัตรูที่ถูกสังหารด้วย Reyna จะทิ้ง Soul Orb \nที่สามารถคงอยู่เป็นเวลา 3 วินาที Devour: ใช้ Soul Orb ที่อยู่ใกล้เคียงในทันที \nเพื่อทำการฮีลอย่างรวดเร็วเป็นระยะเวลาสั้น ๆ พลังชีวิตที่ได้รับจากสกิลนี้ที่เกิน 100 หน่วย\nจะสลายตัวลงตามระยะเวลา หากสกิล EMPRESS ทำงานอยู่ \nสกิลนี้จะถูกร่ายโดยอัตโนมัติ และไม่ต้องใช้ Soul Orb"
    skillEText = "E - DISMISS\n\nใช้ Soul Orb ที่อยู่ใกล้เคียงในทันที ทำให้ไร้ตัวตนเป็นระยะเวลาสั้น ๆ หากสกิล EMPRESS ทำงานอยู่\nจะทำให้ล่องหนด้วย    "
    skillCText = "C - LEER\n\nติดตั้งดวงตา เพื่อทำลายการมองเห็น เปิดใช้งานเพื่อฟื้นฟูความสามารถในการมองเห็นเป็นระยะทางสั้น ๆ ข้างหน้า\nศัตรูที่มองมันจะมองเห็นเป็นระยะทางสั้น ๆ เท่านั้น    "
    skillXText = "X - EMPRESS\n\nเข้าสู่สถานะบ้าคลั่งในทันที ซึ่งจะเพิ่มความเร็วในการยิง การติดตั้งอุปกรณ์ และการรีโหลดอย่างมาก\nรับการชาร์จไม่จำกัดของสกิล Soul Harvestการสังหารจะทำให้เริ่มนับระยะเวลาใหม่อีกครั้ง    "

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4 >"
}

function chooseKilljoy(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่SENTINEL\n\n//ชีวประวัติ \n\nอัจฉริยะแห่งประเทศเยอรมัน Killjoy เข้าควบคุมสนามรบได้อย่างง่ายดายด้วยกองทัพปัญญาประดิษฐ์ของเธอ หากความเสียหายจากอุปกรณ์ของเธอหยุดศัตรูไม่ได้ ดีบัฟจากหุ่นยนต์ของเธอจะทำให้มันง่ายขึ้นเอง"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png >"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4  >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt143467a7379d4211/5f21feb94d73a00a2e1428d3/Copy_of_TX_KJ_Alarm.png > "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1a4926627b38cc1a/5f2201490e38240638cd81d2/Copy_of_tx_kj_turret.png > "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e53712407193852/5f22010d8ff50d070ad2d172/Copy_of_TX_KJ_Bees.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1e4113a934e67fa3/5f22018d71ec397ef9bf089e/Copy_of_TX_KJ_Lockdown.png> "

    skillQText = "Q - ALARMBOT\n\nติดตั้ง Alarmbot ลับ ยิงเพื่อปล่อยบอทที่จะไล่ล่าศัตรูที่อยู่ในรัศมี เมื่อไปถึงเป้าหมายของมันแล้ว\nบอทจะระเบิดเพื่อสร้างความเสียหายและทำให้ติดสถานะเปราะบาง กดปุ่มติดตั้งค้างไว้เพื่อเรียกบอทที่ถูกส่งออกไปกลับมา"
    skillEText = "E - TURRET\n\nติดตั้ง Turret ยิงเพื่อปล่อยป้อมปืนที่จะยิงศัตรูในรูปกรวย\n180 องศา กดปุ่มติดตั้งค้างไว้เพื่อเรียกป้อมปืนที่ถูกส่งออกไปกลับมา    "
    skillCText = "C - NANOSWARM\n\nติดตั้งระเบิด Nanoswarm ยิงเพื่อปาระเบิด เมื่อถึงพื้น Nanoswarm จะซ่อนตัวทันที\nเปิดใช้งาน Nanoswarm เพื่อปล่อยฝูง Nanobots ออกไปสร้างความเสียหาย   "
    skillXText = "X - LOCKDOWN\n\nติดตั้งอุปกรณ์กักขัง ยิงเพื่อปล่อยอุปกรณ์ หลังจากทิ้งไว้เป็นเวลานาน\nอุปกรณ์จะกักขังศัตรูทุกตัวที่อยู่ในรัศมี ศัตรูสามารถทำลายอุปกรณ์ได้  "

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4 >"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4 >"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4 >"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4 >"
}

function chooseSkye(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่SENTINEL\n\n//ชีวประวัติ \n\nส่งเสียงโห่ร้องจากออสเตรเลีย Skye และพวกสัตว์ร้ายของเธอเผาเส้นทางของศัตรูให้ลุกโชน ทีมของคุณจะแข็งแกร่งและปลอดภัยที่สุดเมื่ออยู่เคียงข้าง Skye ที่มาพร้อมกับสิ่งประดิษฐ์ของเธอที่ใช้ขัดขวางศัตรู และพลังที่สามารถฟื้นฟูผู้อื่น"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png>"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4>"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta3c0de454b776542/5f7fa772e69fa40ef3183bda/SKye-abilities-_0000s_0003_ICONS_0000_Layer-1.png> "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7243683c6daf467d/5f7fa7729d46c20f09177ab7/SKye-abilities-_0000s_0002_ICONS_0001_Layer-2.png> "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaa1ff9d900a13d3a/5f7fa772f98ad40e91dc75e4/SKye-abilities-_0000s_0001_ICONS_0002_Layer-3.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce2ce64e31a00348/5f7fa77202e6b80ebf902384/SKye-abilities-_0000s_0000_ICONS_0003_Layer-4.png> "

    skillQText = "Q - TRAILBLAZER\n\nติดตั้งเครื่องประดับเสือแทสเมเนียน ยิงเพื่อปล่อยนักล่าออกไปข้างหน้าและควบคุมมัน เมื่ออยู่ในการควบคุม\nยิงเพื่อกระโจนไปข้างหน้า ระเบิดด้วยการสั่นสะเทือนและสร้างความเสียหายต่อศัตรูโดยตรง"
    skillEText = "E - GUIDING LIGHT\n\nติดตั้งเครื่องประดับเหยี่ยว ยิงเพื่อปล่อยมันออกไปข้างหน้า \nกดยิงค้างไว้เพื่อนำทางเหยี่ยวที่อยู่ในรัศมีเป้าเล็งของคุณ\nใช้งานอีกครั้งในขณะที่เหยี่ยวยังคงบินอยู่เพื่อแปลงร่างมันเป็นแฟลชที่จะส่งเสียง\nเมื่อยิงโดนศัตรู หากศัตรูอยู่ในระยะการโจมตีและรัศมีการมองเห็น "
    skillCText = "C - REGROWTH\n\nติดตั้งเครื่องประดับฮีล กดยิงค้างไว้เพื่อร่าย ฮีลพันธมิตรในระยะและรัศมีการมองเห็น\nสามารถใช้ซ้ำได้จนกว่าการฮีลของเธอจะหมดลง Skye ไม่สามารถฮีลตนเองได้ "
    skillXText = "X - SEEKERS\n\nติดตั้งเครื่องประดับ Seeker ยิงเพื่อส่ง Seeker ออกไปสามตัว\nและล่าตำแหน่งของศัตรูสามคนที่อยู่ใกล้ที่สุด หาก Seeker\nพบเป้าหมาย มันจะทำให้ศัตรูมองเห็นเพียงแค่ในระยะประชิดทันที"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4>"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4>"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4>"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4>"
}

function chooseYoru(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่DUELIST\n\n//ชีวประวัติ \n\nชายหนุ่มชาวญี่ปุ่นผู้สามารถเคลื่อนย้ายข้ามมิติโลกแห่งความเป็นจริงเพื่อแฝงตัวไปในกองทัพของศัตรูได้อย่างแนบเนียน ด้วยเล่ห์กลและความดุดันที่เทียบเท่ากัน เขาสามารถโค่นศัตรูได้ก่อนที่พวกมันจะได้ทันตั้งตัวเสียด้วยซ้ำ"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png>"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4>"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt54759b7874fbd40c/5ff5681bb47cdf7fc7d6c3e6/Yoru_Anility_Icons_512x512_Q.png> "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5427236bf8a82b05/5ff5685e1166ce7d2ed1bd5d/yoru_ability_icons_52x512_E.png> "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3ffa0e1858916cb8/622159a1c56d222d0cb0cc12/TX_Yoru_Fakeout.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceb6f71853fa7be7/5ff568b3396e65084a9e8c7c/Yoru_Anility_Icons_512x512_X.png> "

    skillQText = "Q - BLINDSIDE\n\nติดตั้งเพื่อฉีกชิ้นส่วนห้วงมิติที่ไม่เสถียรออกจากความเป็นจริง ยิงเพื่อปาชิ้นส่วนออกไป\nทำให้เกิดแสงสว่างวาบหลังจากกระทบกับพื้นผิวชั่วครู่"
    skillEText = "E - GATECRASH\n\nติดตั้งโซ่ริฟท์ ยิงเพื่อปล่อยโซ่ให้พุ่งไปข้างหน้า กดโหมดยิงเสริมเพื่อวางโซ่ลง\nกดเปิดใช้งานเพื่อเคลื่อนย้ายไปยังตำแหน่งของโซ่ กดใช้เพื่อเทเลพอร์ตหลอก "
    skillCText = "C - FAKEOUT\n\nติดตั้งเสียงสะท้อนที่เปลี่ยนรูปร่างเป็นเสมือนของ Yoru เมื่อเปิดใช้งาน \nยิงเพื่อเปิดใช้งานภาพเสมือนโดยทันทีและส่งมันออกไปข้างหน้า\nกดโหมดยิงเสริมเพื่อวางเสียงสะท้อนลง กดใช้เพื่อเปลี่ยนรูปร่างของเสียงสะท้อน\nที่ยังไม่เปิดใช้งานให้เป็นภาพเสมือนและส่งออกไปข้างหน้า\nvภาพเสมือนจะระเบิดออกด้วยแฟลชที่จะบดบังวิสัยทัศน์เมื่อถูกศัตรูทำลาย"
    skillXText = "X - DIMENSIONAL DRIFT\n\nติดตั้งหน้ากากที่ช่วยให้มองเห็นมิติต่าง ๆ \nยิงเพื่อเข้าไปยังมิติของ Yoru ทำให้ศัตรูที่อยู่ภายนอกไม่สามารถมองเห็นหรือโจมตีเขาได้"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4>"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/62215a1f47e4d72e3e67ff1a/Website_Yoru_Rework_Gatecrash_v2.mp4>"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/62215aaed83ad851e8a9e09d/Website_Yoru_Rework_Fakeout_v2.mp4>"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/62215bbd6f0333490a0e7bec/Website_Yoru_Rework_Dimensional_Drift_v2.mp4>"
}

function chooseAstra(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่Controller\n\n//ชีวประวัติ \n\nเอเจนท์ชาวกานาควบคุมพลังแห่งจักรวาลเพื่อปรับรูปแบบสนามรบให้เป็นไปตามความต้องการของเธอ ด้วยความสามารถในการควบคุมร่างดวงดาวของเธอและพรสวรรค์ในการวางแผนกลยุทธ์อย่างลึกซึ้ง เธอมักจะนำหน้าศัตรูอยู่หนึ่งก้าวเสมอ"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png>"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4 >"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8205d4a5a6cf1fca/6039aa950efbd9779b028acd/Astra_Ability_Icons_Q_NovaPulsev2.png> "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt60eb8df261fc5d0b/6039aaa62eee966ee2e3d52e/Astra_Ability_Icons_E_Nebulav2.png> "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9cb14de8632bd26e/6039aab70efbd9779b028ad1/Astra_Ability_Icons_C_GravityWellv2.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5b7c62ae295bac95/6039aac8946aa93dbe59a693/Astra_Ability_Icons_X_CosmicDividev2.png> "

    skillQText = "Q - NOVA PULSE\n\nจัดวางดวงดาวใน Astral Form (X) เปิดใช้งานดวงดาวเพื่อจุดชนวน Nova Pulse สกิล Nova Pulse จะชาร์จครู่หนึ่งก่อนที่จะทำงาน สร้างความเสียหายแก่ผู้เล่นทุกคนที่อยู่ในบริเวณนั้น"
    skillEText = "E - NEBULA\n\nจัดวางดวงดาวใน Astral Form (X) เปิดใช้งานดวงดาวเพื่อแปลงมันเป็น Nebula (กลุ่มควัน) ใช้ (F) ไปที่ดวงดาวเพื่อกระจายมันออก ส่งคืนดาวเพื่อวางในตำแหน่งใหม่หลังจากดีเลย์ สลายเป็น Nebula ปลอมในเวลาสั้น ๆ ในตำแหน่งของดาวก่อนที่จะกลับมา    "
    skillCText = "C - GRAVITY WELL\n\nจัดวางดวงดาวใน Astral Form (X) เปิดใช้งานดวงดาวเพื่อสร้าง Gravity Well ผู้เล่นที่อยู่ในบริเวณจะถูกดึงเข้าจุดศูนย์กลางก่อนที่มันจะระเบิด ส่งผลให้ผู้เล่นที่ติดอยู่ภายในได้รับสถานะเปราะบาง"
    skillXText = "X - ASTRAL FORM / COSMIC DIVIDE\n\nเปิดใช้งาน (X) เพื่อเข้าสู่ Astral Form ที่คุณสามารถจัดวางดวงดาวกับอาวุธหลักของคุณ คุรสามารถเปิดใช้ดวงดาวอีกครั้งในภายหลังเพื่อแปลงพวกมันเป็น/nNova Pulse, Nebula หรือ Gravity Well เมื่ออัลติเมทของเธอชาร์จแล้ว ใช้อาวุธเสริมใน Astral Form/nเพื่อเลือกตำแหน่งที่หนึ่ง แล้วใช้อาวุธหลักเพื่อเลือกตำแหน่งที่สอง จากนั้นก็สร้าง Cosmic Divide/nที่ไม่มีที่สิ้นสุดเพื่อเชื่อมต่อทั้งสองจุด Cosmic Divide จะบล็อกกระสุนและลดทอนเสียงอย่างมาก"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4>"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4>"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4>"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4>"
}

function chooseKayO(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่INITIATOR\n\n//ชีวประวัติ \n\nเป็นจักรกลสงครามที่ถูกสร้างขึ้นเพื่อวัตถุประสงค์เดียว: กำจัด Radiant ความสามารถในการยับยั้งพลังของศัตรูจะลดการตอบโต้จากคู่ต่อสู้ของเขาได้อย่างมาก และทำให้เขาและเพื่อนร่วมทีมเอาชนะศึกไปได้ในที่สุด"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png>"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4>"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt83e92ae578e66b8e/60d204231e0505677a882f38/Q_FlashDrive.png> "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt496288e7ab899b47/60d2018db930a53616fa4882/E_ZeroPoint.png> "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte671cefaedb07d26/60d2046483f9fe49a6fef713/C_FragMent.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltead1f4cb9ad32e19/60d20208bcec595109d831c2/X_NullCmd.png> "

    skillQText = "Q - FLASH/DRIVE\n\nติดตั้งระเบิดแฟลช ยิงเพื่อปา ระเบิดแฟลชจะระเบิดหลังจุดชนวนสั้น ๆ\nทำให้ผู้เล่นทุกคนที่มองดูสูญเสียการมองเห็น    "
    skillEText = "E - ZERO/POINT\n\nติดตั้งใบมีดยับยั้งพลัง ยิงเพื่อปา ใบมีดจะติดกับพื้นผิวแรกที่โดน ชาร์จสักครู่\nแล้วยับยั้งพลังของทุกคนที่อยู่ในรัศมีระเบิด"
    skillCText = "C - FRAG/MENT\n\nติดตั้งเศษชิ้นส่วนระเบิด ยิงเพื่อปา เศษชิ้นส่วนจะติดกับพื้นและระเบิดหลายครั้งติดต่อกัน\nสร้างความเสียหายเกือบถึงตายในพื้นที่ศูนย์กลางหลังการระเบิดแต่ละครั้ง"
    skillXText = "X - NULL/CMD\n\nโอเวอร์โหลดทันทีด้วยพลังงาน Radianite เปลี่ยนขั้วที่จะเสริมพลัง KAY/O\nและปล่อยคลื่นพลังงานขนาดใหญ่จากพื้นที่ของเขา ศัตรูที่โดนคลื่นเหล่านี้จะถูกยับยั้งพลังเป็นระยะเวลาสั้น ๆ"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4>"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4>"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4>"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4>"
}

function chooseChamber(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " // หน้าที่ SENTINEL \n\n// ชีวประวัติ \n\nแต่งกายครบชุด อาวุธจัดเต็ม Chamber นักออกแบบอาวุธชาวฝรั่งเศสจะยับยั้งผู้บุกรุกด้วยความแม่นยำอย่างร้ายกาจ เขาใช้คลังแสงสั่งทำพิเศษของเขาเพื่ิอป้องกันพื้นที่ และเด็ดหัวศัตรูจากระยะไกล และมีแผนสำรองที่เหมาะสมสำหรับทุกแผนการ"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png>"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4>"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt734ce749d24f1b4f/618d9ebad380f814d61f0020/Chamber_ability_Q.png> "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt273c7e9db39da271/618d9ec29dccbf6fa4178520/Chamber_ability_E.png> "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4c14aadba51a0037/618d9ed03b08dd14d79a8087/Chamber_ability_C.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6856745815feee67/618d9eda3b08dd14d79a808b/Chamber_ability_X.png> "

    skillQText = "Q - HEADHUNTER\n\nใช้งานเพื่อติดตั้งปืนพกหนัก ใช้ปุ่มยิงเสริมเมื่อติดตั้งปืนพกเพื่อเล็งผ่านลำกล้อง"
    skillEText = "E - RENDEZVOUS\n\nวางจุดเทเลพอร์ตสองจุด เมื่อยืนอยู่บนพื้นและอยู่ในระยะของจุดเทเลพอร์ต \nกดใช้อีกครั้งเพื่อเทเลพอร์ตอย่างรวดเร็วไปยังจุดเทเลพอร์ตอีกจุดหนึ่ง \nจุดเทเลพอร์ตสามารถเก็บขึ้นมาได้เพื่อติดตั้งใหม่"
    skillCText = "C - FRAG/MENT\n\nติดตั้งเศษชิ้นส่วนระเบิด ยิงเพื่อปา เศษชิ้นส่วนจะติดกับพื้นและระเบิดหลายครั้งติดต่อกัน\nสร้างความเสียหายเกือบถึงตายในพื้นที่ศูนย์กลางหลังการระเบิดแต่ละครั้ง"
    skillXText = "X - TOUR DE FORCE\n\nกดใช้เพื่อเรียกใช้ปืนสไนเปอร์เฉพาะตัวแรงสูงซึ่งจะสังหารศัตรูโดยทันทีหากถูกยิงโดยตรง \nการสังหารศัตรูจะสร้างพื้นที่ที่จะสโลว์ผู้เล่นที่อยู่ในนั้นตรงจุดที่ศัตรูถูกสังหาร"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4>"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4>"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318d4a246e29106a/618d9fdbf71a3113890e9632/VAL_broll_EP03-3_Chamber_C.mp4>"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta111e90b3f2ce476/618d9fde3b08dd14d79a808f/VAL_broll_EP03-3_Chamber_X.mp4>"
}

function chooseNeon(){
    let changerDA_A = document.getElementById("DA-A");
    changerDA_A.innerText = " //หน้าที่DUELIST\n\n//ชีวประวัติ \n\nเอเจนท์ชาวฟิลิปปินส์พุ่งไปข้างหน้าด้วยความเร็วที่น่าทึ่ง พร้อมปลดปล่อยระลอกไฟฟ้าชีวภาพได้เร็วพอ ๆ กับที่ร่างกายของเธอสร้างได้ เธอเคลื่อนที่อย่างรวดเร็วเพื่อจัดการศัตรูอย่างรวดเร็วแบบไม่ทันได้ตั้งตัว"
    let changerimg_A = document.getElementById("img-A");
    changerimg_A.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png>"
    let changerteaser_A = document.getElementById("video-A")
    changerteaser_A.innerHTML = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf634e203f29987a5/61d8a91abf9cb8387cc1d9c8/VAL_Neon_Ability-Q_Preview_Stun_noHUD_Web_h264.mp4>"
    let changerskillQ = document.getElementById("Q")
    changerskillQ.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt10d37aa745665f36/61d8a80814ef402247ceab30/Neon_Q-Relay_Bolt.png> "
    let changerskillE = document.getElementById("E")
    changerskillE.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc7f73a2cfc4e3e44/61d8a8181757dc6aed2ada7c/Neon_E-High_Gear.png> "
    let changerskillC = document.getElementById("C")
    changerskillC.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50ac2316cddbb64d/61d8a8209efff26ae759809a/Neon_C-Fast_Lane.png> "
    let changerskillX = document.getElementById("X")
    changerskillX.innerHTML = "<img src=https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf74e9670f324266/61d8a829997c0e224de09fae/Neon_X-Overdrive.png> "

    skillQText = "Q - RELAY BOLT\n\nยิงคลื่นพลังงานทันที มันสามารถชิ่งได้หนึ่งครั้ง เมื่อกระทบพื้นผิวแต่ละครั้ง ลูกดอกจะสร้างกระแสไฟฟ้าช็อตพื้นดินเบื้องล่าง ก่อให้เกิดแรงสะเทือน"
    skillEText = "E - HIGH GEAR\n\nใช้พลังของ Neon เพื่อเพิ่มความเร็วทันที เมื่อมีชาร์จพอ จะสามารถกดยิงเสริมเพื่อสไลด์ด้วยพลังงานไฟฟ้า ชาร์จสำหรับการสไลด์จะถูกรีเซ็ตทุก ๆ การสังหารสองครั้ง "
    skillCText = "C - TRADEMARK\n\nวางกับดักที่จะทำการสแกนศัตรู เมื่อมีศัตรูที่มองเห็นได้เข้ามาในระยะ \nกับดักจะทำการนับถอยหลังแล้วจากนั้นจะทำให้พื้นที่รอบ ๆเกิดความไม่เสถียร \nสร้างเป็นพื้นที่ที่จะสโลว์ผู้เล่นที่อยู่ในนั้น"
    skillXText = "X - OVERDRIVE\n\nปลดปล่อยพลังของ Neon ถึงขีดจำกัดสูงสุด เพิ่มความรุนแรงและความเร็วของเธอเป็นระยะเวลาสั้น ๆ\nกดยิงเพื่อรวมพลังงานเป็นลำแสงสายฟ้าที่มีความแม่นยำสูง ระยะเวลาของมันจะถูกรีเซ็ตเมื่อสังหารศัตรูได้"

    videoQHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf634e203f29987a5/61d8a91abf9cb8387cc1d9c8/VAL_Neon_Ability-Q_Preview_Stun_noHUD_Web_h264.mp4>"
    videoEHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt99e20f893b806cc8/61d8a9608aabbf6426b7523a/VAL_Neon_Ability-E_Preview_Sprint_noHUD_Web_h264.mp4>"
    videoCHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt023814e24e6cad2f/61d8a98914ef402247ceab3a/VAL_Neon_Ability-C_Preview_Walls_noHUD_Web_h264.mp4>"
    videoXHtml = "<video autoplay mute src=https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcbe0e9c4b801f025/61d8a9dfef206c6c5e4941ba/VAL_Neon_Ability-X_Preview_Ult_noHUD_Web_h264.mp4>"
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

