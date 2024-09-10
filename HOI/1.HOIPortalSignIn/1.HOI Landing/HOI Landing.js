const Titles = [

    {
        Group: '             KANYADET PRIMARY SCHOOL SIP COMMITTEE MEETING',
        year: 2023,
        students: [
           {
             Date: 'Thursday 10th, October 2023',
             pdfUrl: 'https://docs.google.com/document/d/1ZPLo78E5z02Y2pH2EHWU9KS84bmnwrN4/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'KANYADET JUNIOR SECONDARY INFRASTRUCTURE COMMITTEE MEETING ',
        year: 2024,
        students: [
           {
            Date: 'Thursday 25th, January 2024',
             pdfUrl: 'https://docs.google.com/document/d/1YoiYGyNekMA9qk2J4PAhpCgzf4wfQn_O/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'KANYADET JUNIOR SCHOOL TENDER OPENING COMMITTEE ',
        year: 2024,
        students: [
           {
             Date: 'Friday 2nd, February 2024',
             pdfUrl: 'https://docs.google.com/document/d/1ZLFmVkpV8BPiHy-T4w1XYYFLqI2jG30V/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },


    {
        Group: 'KANYADET PRIMARY SCHOOL BOM MEETING ',
        year: 2024,
        students: [
           {
            Date: 'Thursday 7th, February 2024',
             pdfUrl: 'https://docs.google.com/document/d/1YhVRl4aY5pALgn7aX5DXFb3JcsetJqkq/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'KANYADET PRIMARY SCHOOL BOM MEETING WITHOUT BUDGET ',
        year: 2024,
        students: [
           {
            Date: 'Thursday 8th, February 2024',
             pdfUrl: 'https://docs.google.com/document/d/1ZWGdPywdqekA4z3hmsqDv2eDz_SYQ1Zd/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'KANYADET PRIMARY SCHOOL BOM BUDGET MEETING',
        year: 2024,
        students: [
           {
            Date: 'Thursday 8th, February 2024',
             pdfUrl: 'https://docs.google.com/document/d/1ZOUR1frSnyFm1ekzA9g0QNpcJmGgOHZz/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'KANYADET SCHOOL KPEEL TENDER OPENING COMMITTEE',
        year: 2024,
        students: [
           {
             Date: 'Tuesday 16th , February 2024',
             pdfUrl: 'https://docs.google.com/document/d/1YwHRyMI0yCVQ0TeMQQ3JkWXwPPvWpmMu/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'KANYADET SCHOOL BOM MEETING ',
        year: 2024,
        students: [
           {
             Date: 'Tuesday 5th, March 2024',
             pdfUrl: 'https://docs.google.com/document/d/1Yq-yYw3p1nC3L8Sv1FKgrf2liaxZYins/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'TO THE CDE – MOE, SIAYA COUNTY P.O BOX 564 SIAYA',
        year: 2024,
        students: [
           {
             Date: 'Thursday 7th, March 2024',
             pdfUrl: 'https://docs.google.com/document/d/1Zbf7pKwOnuZPOYzjNh6eB-Tt74GzTC7n/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },

    {
        Group: 'KANYADET PRIMARY SCHOOL IMPROVEMENT PLAN (SIP) BUDGET FOR PHASE ONE',
        year: 2024,
        students: [
           {
             Date: 'Thursday 7th, March 2024',
             pdfUrl: 'https://docs.google.com/document/d/1ZM08lmajI8Pilcu8w6tQoLt1S2Py3yNs/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
             imageUrl: './images/newlogo.png'
             },
        ]
    },
   

   

   

   
   

   
    // Add more Groups with students and their PDF/image URLs
];

// Function to search and display students based on Title
function searchStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchInput2 = document.getElementById('searchInput2').value.toLowerCase();
    const documentList = document.getElementById('documentList');
    documentList.innerHTML = ''; // Clear previous search results

    let foundStudents = false;

    Titles.forEach((Title) => {
        Title.students.forEach((student) => {
            if (
                (Title.Group.toLowerCase().includes(searchInput) || Title.year.toString().includes(searchInput)) &&
                (Title.Group.toLowerCase().includes(searchInput2) || Title.year.toString().includes(searchInput2))
            ) {
                const studentCard = document.createElement('div');
                studentCard.classList.add('document-card');

                const studentTitle = document.createElement('p');
                // studentTitle.textContent = 'Title: ' + Title.Group + ' - ' + Title.year; // Include year in display
                studentTitle.textContent = Title.Group  // Include year in display
                // studentTitle.textContent = 'Title: ' + Title.Group  // Include year in display
                highlightText(studentTitle, searchInput); // Highlight matching text or year
                highlightText(studentTitle, searchInput2); // Highlight matching text or year

                const studentDate = document.createElement('h3');
                studentDate.textContent = 'Dated: ' + student.Date ;
                // studentDate.textContent = 'Date: ' + student.Date;
                highlightText(studentDate,searchInput); // Highlight matching text or year
                highlightText(studentDate,searchInput2); // Highlight matching text or year

                const studentDownloadBtn = document.createElement('button');
                studentDownloadBtn.textContent = 'Download';
                studentDownloadBtn.addEventListener('click', () => {
                    Swal.fire({
                        icon:'info',
                        title:'Chose Action',
                        Date: 'Choose Action',
                        text: 'Do you want to Edit, open  Or Close the Window process?',
                        footer:'You need data to Edit in real time for the changes to synchronize, without it all your edits will not be saved!🧑‍⚕️ ',
                        showCancelButton: true,
                        confirmButtonText: 'Edit',
                        cancelButtonText: 'Close',
                        cancelButtonColor: '#3085d6',
                        showDenyButton: true,
                        denyButtonText: 'Open'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            downloadPDF(student.pdfUrl, Title.Group, student.Date); // Pass document Date and year for download Date
                        } else if (result.isDenied) {
                            openPDF(student.pdfUrl);
                        }
                    });
                });

                const studentImage = document.createElement('img');
                studentImage.src = student.imageUrl;
                studentImage.alt = student.Date + ' Image';
                studentCard.appendChild(studentImage);

                studentCard.appendChild(studentTitle);
                studentCard.appendChild(studentDate);
                studentCard.appendChild(studentDownloadBtn);
                documentList.appendChild(studentCard);

                foundStudents = true;
            }
        });
    });

    if (!foundStudents) {
        Swal.fire({
            icon: 'Title',
            Date: 'No Student Found',
            text: 'Please try a different search term.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Reload the page if no student is found
            location.reload();
        });
    }
}

// Function to open PDF in a new tab
function openPDF(url) {
    window.open(url, '_blank');
}

// Function to download PDF with the document Date and year as the download Date
function downloadPDF(url, documentDate, Date) {
    const a = document.createElement('a');
    a.href = url;
    a.download = documentDate + '-' + ' Dated ' + Date + '.docx'; // Use the document Date and year for the download Date
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to highlight text within a given element
function highlightText(element, searchText) {
    const innerHTML = element.innerHTML;
    const index = innerHTML.toLowerCase().indexOf(searchText.toLowerCase());
    if (index >= 0) {
        const highlightedText = innerHTML.substring(0, index) +
            '<span class="highlight">' + innerHTML.substring(index, index + searchText.length) + '</span>' +
            innerHTML.substring(index + searchText.length);
        element.innerHTML = highlightedText;
    }
}

// Call searchStudents function when the page loads and on input change
window.onload = searchStudents;
document.getElementById('searchInput').addEventListener('input', searchStudents);
document.getElementById('searchInput2').addEventListener('input', searchStudents); // Added event listener for second search input
