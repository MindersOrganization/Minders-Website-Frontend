/*

{
    name: string, // Name of the folder or file
    type: 'folder' | 'file', // Type of the item
    children?: Array, // Only for folders, contains nested items
    downloadUrl?: string, // Only for files, the URL to download the file
    link?: string, // Optional link for folders
    notExtendable?: boolean, // Optional, if true, the folder cannot be expanded
  }
 */





const mockAcademicData = [
    {
        name: 'Level 1',
        type: 'folder',
        children: [
            {
                name: 'Semester 1',
                type: 'folder',
                children: [
                    {
                        name: 'Electronics',
                        type: 'folder',
                        children: [
                            {
                                name: 'Lec 8 transistor.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/10mL5ItuhxHD6qRQ-VgAW980vD-Cq8134/view'
                            }
                        ]
                    },
                    {
                        name: 'Math 1',
                        type: 'folder',
                        children: [
                            {
                                name: 'Lecture 6.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1_Mrg-m2ukFrj-LAR1YrNF1UxcMlL3j0v/view'
                            },
                            {
                                name: 'Lecture 9-10.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1_O3O9NnGTDknenmNrMONj_fZp2_xmw5g/view'
                            },
                            {
                                name: 'Lecture 14.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1Ya5H_xaeJGYV9hg79168AxzBXME-fU8S/view'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Level 2',
        type: 'folder',
        children: [
            {
                name: 'Term 1',
                type: 'folder',
                children: [
                    {
                        name: 'Stats 2',
                        type: 'folder',
                        children: [

                            {
                                name: 'Lectures',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'Full course old slides.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1_Ew0jiAtaUjkN0w6BgHnboVkXA0TyGPk/view'
                                    },
                                    {
                                        name: 'Hypothesis-1.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/16b1-WBruPBWEJApixyQrfZyL4To4wWNY/view'
                                    },
                                    {
                                        name: 'Hypothesis-2.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1ZGeh4n8dmUpkp9BGHxh_DH55_5j0_X2D/view'
                                    },
                                    {
                                        name: 'Hypothesis-3.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1HoQrf59RL9jivVf91YuvUjcaHCLTyVye/view'
                                    },
                                    {
                                        name: 'Hypothesis Testing Examples.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1j2Fiw3nIsziicikT4dIuA5hFhLoGdDyE/view'
                                    },
                                    {
                                        name: 'Interval Estimate Examples.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1wcb7TMNI7tv1DtY9mIChnK_46JdCySiA/view'
                                    },
                                    {
                                        name: 'Lecture 1&2.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1CK8T8GwT7bS0W7Qv8eBv9d-xB0RnH4N-/view'
                                    },
                                    {
                                        name: 'Lecture 3&4.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1gGCQouL0aIeOfNEmRgGm7EB5Gw9SsV46/view'
                                    },
                                    {
                                        name: 'Lecture 5&6.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/19wMQWfB51xFBbxjyK8JlQIhO0KQtkF8v/view'
                                    },
                                    {
                                        name: 'Lecture 7&8.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1gYm3xGtVqIMAIeeFGMp5JxWQ3FwOQeg2/view'
                                    },
                                    {
                                        name: 'Lecture 9&10(1).pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1TDzQsWfbuCQaignydoPcntMWeRMFrJMf/view'
                                    },
                                    {
                                        name: 'Lecture 11&12(1).pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/15gbKMPKUxbdtjq904m8-gOn0z2lvRbVU/view'
                                    },
                                    {
                                        name: 'Lecture 13&14(the last).pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1YMZIc38BrM32HN0DdDN68xiNTTBcMZlb/view'
                                    },
                                    {
                                        name: 'Statistical Tables.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/12k05-QVWB5cYDF2x9lAPkg_EJ1wVgKPT/view'
                                    }
                                ]
                            },
                            {
                                name: 'Stat 2 Summary',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'Summary 6',
                                        type: 'folder',
                                        children: [
                                            {
                                                name: 'Summary 6.pdf',
                                                type: 'file',
                                                downloadUrl: 'https://drive.google.com/file/d/1m4D_LxWb4wuH_LfrKke0N7AhqNc2Ex59/view'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Summary 5',
                                        type: 'folder',
                                        children: [
                                            {
                                                name: 'Summary 5.pdf',
                                                type: 'file',
                                                downloadUrl: 'https://drive.google.com/file/d/1SL6SiVv6O_00Ps0NZOjxLOq19QgE053I/view'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Summary 4',
                                        type: 'folder',
                                        children: [
                                            {
                                                name: 'Summary 4.pdf',
                                                type: 'file',
                                                downloadUrl: 'https://drive.google.com/file/d/1-fWbEmGFzLFpmVEBAEwDktZNvjlMdFfD/view'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Summary 3',
                                        type: 'folder',
                                        children: [
                                            {
                                                name: 'Summary 3.pdf',
                                                type: 'file',
                                                downloadUrl: 'https://drive.google.com/file/d/1YEYwJP_NZFHZyLu5v7i1NaD-XeblSJ4Y/view'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Summary 2',
                                        type: 'folder',
                                        children: [
                                            {
                                                name: 'Summary 2.pdf',
                                                type: 'file',
                                                downloadUrl: 'https://drive.google.com/file/d/1rOBaKtq1CxrYRyRw72mI3l-tfqSIsblH/view'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Summary 1',
                                        type: 'folder',
                                        children: [
                                            {
                                                name: 'Chapter 1.pdf',
                                                type: 'file',
                                                downloadUrl: 'https://drive.google.com/file/d/1NaJI2pn5iXWPQY6UjbpHmRDsQ3zolaOg/view'
                                            },
                                            {
                                                name: 'Chapter 2.mp4',
                                                type: 'file',
                                                downloadUrl: 'https://drive.google.com/file/d/1fhanT0yVU2myKgVXvTWKKROgqLwJ24u1/view'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Stat2.pdf',
                                        type: 'file',
                                        downloadUrl:  'https://drive.google.com/file/d/1fXQhWeBPJ3ndhSrV658bkkYDRA0eFRLk/view'
                                    }
                                ]
                            }

                        ]

                    },
                    {
                        name: 'Logic',
                        type: 'folder',
                        children: [
                            {
                                name: 'Logic Design Lectures 8 - Decoders and Encoders.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1PtbmSjUZiBaojnYgGAGmoDfjQXTMy1FN/view'
                            },
                            {
                                name: 'Logic Design - Lectures 1&2&3.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1dAwmYHeZjJ9O4ZP1aaDKaJRqiDMiIdcQ/view'
                            },
                            {
                                name: 'Logic Design Lectures 4&5.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1r9VTieMQ0CmQQdTrQzWJ88XetqeHWTR_/view'
                            },
                            {
                                name: 'Logic Design Lecture 7 - Arithmetic Circuits.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1lwPQU6QJBeNarA-Vf4XvQTlYA1-P2b3_/view'
                            },
                            {
                                name: 'Logic Design Lecture 9 - Multiplexers and Demultiplexers.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1MXRlyTjCOFl8oYk56hYJoo3rOm5s8nlt/view'
                            }
                        ]
                    },
                    {
                        name: 'Network',
                        type: 'folder',
                        children: [
                            {
                                name: 'Network - Chap-1.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1aFlYpsNVmnoR1kL_66ocvjlBI7eejieO/view'
                            },
                            {
                                name: 'Network - Chap-2.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1WqGhRDMLNWuoIK4_TGE03lmlJanVRSTt/view'
                            }
                        ]
                    },
                    {
                        name: 'Software',
                        type: 'folder',
                        children: [
                            {
                                name: 'ch 5 software level 2.docx',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/1hlwVH9ky8NYwe9KMDEYWdwmF1iCIMPnO/view'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Level 3',
        type: 'folder',
        children: [
            {
                name: 'Semester 1',
                type: 'folder',
                children: [
                    {
                        name: 'IT',
                        type: 'folder',
                        children: [
                            {
                                name: 'Architecture',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'Computer Architecture till lecture 5.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1DR36GyyXA6TtcVngOgvhcvpin70azIgG/view'
                                    }
                                ]
                            },
                            {
                                name: 'Data Communication',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'Data_Communication CH 1,2,3,5.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1SBZ1d7rjpEZMICANGMeP1-aNs9z_Dgpx/view'
                                    },
                                    {
                                        name: 'Data_Communication_CH_4.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1JizB7DopiT6Hl_HGH-rufbbmnRjurOpI/view'
                                    },
                                    {
                                        name: 'Data_Communication_Ch_7.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1ny4uirDuVTceDKa6gVs5sRbJqv_R1EBw/view'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'IS',
                        type: 'folder',
                        children: [
                            {
                                name: 'Files',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'File Summary Part 2.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1R0SQJYjVSzuFqfJbtWD4SwE03zCWNXFA/view'
                                    },
                                    {
                                        name: 'Files Lectures Summary Part1.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1hTgiN0eT5sYwOrxS7X3Fuib1AL-bHY3g/view'
                                    }
                                ]
                            },
                            {
                                name: 'OS',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'OS chapter two-converted.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1guQRfRCRzZs53wnRgHRdaytaiyWkrT8i/view'
                                    },
                                    {
                                        name: 'OS Chapter 6.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1jV1gNbE-nQeZNSuUXaUkx66AKMEArC3q/view'
                                    },
                                    {
                                        name: 'OS Chapter 8.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1smtgWISqTQ3ADig-J-WjCA5BLMXqFYY8/view'
                                    },
                                    {
                                        name: 'OS Chapter 9 Summary.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1XSuCRSurAtsCwoxOT0tQADlu0LWq22go/view'
                                    },
                                    {
                                        name: 'OS chapter one 1.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1ZD70-lEDK1rdCdgZjgRXTiggh25rzkGe/view'
                                    },
                                    {
                                        name: 'OS Summary 3&5.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1oPZhfc0PGdyr9_2w7XSGJH_tSJdXL9Ih/view'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Signals and Systems [AI / IT]',
                        type: 'folder',
                        children: [
                            {
                                name: 'Important Math',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'Summation.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/113JJNmiSkAkE1NSPqsXEFnO9n76YBBOi/view'
                                    }
                                ]
                            },
                            {
                                name: 'Summaries',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'Classification Of Systems.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1jGLQfjL2ElBKnxNTeghOdrky6yTsMZmv/view'
                                    },
                                    {
                                        name: 'Introduction.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1FFvE6ha-3ge-9leixxCGGpY7VR2WOuvl/view'
                                    },
                                    {
                                        name: 'Signals Classification.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/1tgK7gu2qQm1KqJt_nBo_KCFv151e3Gun/view'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Year 3",
        type:"folder",
        children: [
            {
                name: "Algorithm",
                type: 'folder',
                link:"https://drive.google.com/drive/folders/1HGqoHDFy5-GSzqakOggJqTtheacP5Th5",
                notExtendable: true,
            },
            {
                name: "IS",
                type: 'folder',
                link:"https://drive.google.com/drive/folders/1OjyRywzo4qsNlhUJB96j1NjcRBTJnCCK",
                notExtendable: true,

            },
        ]
    }
];

// Export the data for use in other files
window.mockAcademicData = mockAcademicData;