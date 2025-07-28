// Mock data for academic resources
// This is an array of main sections organized by academic levels
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
                        link: 'https://drive.google.com/drive/folders/electronics-level1-folder',
                        children: [
                            {
                                name: 'Lec 8 transistor.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/electronics-lec8-transistor/view'
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
                                downloadUrl: 'https://drive.google.com/file/d/math1-lecture6/view'
                            },
                            {
                                name: 'Lecture 9-10.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/math1-lecture9-10/view'
                            },
                            {
                                name: 'Lecture 14.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/math1-lecture14/view'
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
                name: 'Semester 1',
                type: 'folder',
                children: [
                    {
                        name: 'Electronics',
                        type: 'folder',
                        link: 'https://drive.google.com/drive/folders/electronics-level2-folder',
                        children: [
                            {
                                name: 'Logic.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/electronics-logic/view'
                            },
                            {
                                name: 'Network.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/electronics-network/view'
                            },
                            {
                                name: 'Software.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/electronics-software/view'
                            },
                            {
                                name: 'Statistics 2.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/electronics-statistics2/view'
                            }
                        ]
                    },
                    {
                        name: 'Statistics 2',
                        type: 'folder',
                        children: [
                            {
                                name: 'Stat-2 Second Part.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/stat2-second-part/view'
                            },
                            {
                                name: 'Statistics 2 - Till Midterm.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/stat2-till-midterm/view'
                            }
                        ]
                    },
                    {
                        name: 'Logic',
                        type: 'folder',
                        children: [
                            {
                                name: 'Logic Design Lectures 1 - Decoders and Encoders.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/logic-decoders-encoders/view'
                            },
                            {
                                name: 'Logic Design - Lectures 15&23.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/logic-lectures-15-23/view'
                            },
                            {
                                name: 'Logic Design Lectures 4&5.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/logic-lectures-4-5/view'
                            },
                            {
                                name: 'Logic Design Lecture 7 - Arithmetic Circuits.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/logic-arithmetic-circuits/view'
                            },
                            {
                                name: 'Logic Design Lecture 9 - Multiplexers and Demultiplexers.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/logic-multiplexers-demux/view'
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
                                downloadUrl: 'https://drive.google.com/file/d/network-chap1/view'
                            },
                            {
                                name: 'Network - Chap-2.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/network-chap2/view'
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
                                downloadUrl: 'https://drive.google.com/file/d/software-ch5-level2/view'
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
                        name: 'Statistics 2',
                        type: 'folder',
                        children: [
                            {
                                name: 'I5.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/stat2-i5/view'
                            },
                            {
                                name: 'I1.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/stat2-i1/view'
                            },
                            {
                                name: 'Signals and Systems (AI / IT).pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/signals-systems-ai-it/view'
                            }
                        ]
                    },
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
                                        downloadUrl: 'https://drive.google.com/file/d/it-architecture-lec5/view'
                                    }
                                ]
                            },
                            {
                                name: 'Data Communication',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'Data_Communication CH 1,2,3,8.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/it-datacomm-ch1238/view'
                                    },
                                    {
                                        name: 'Data_Communication_CH_4.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/it-datacomm-ch4/view'
                                    },
                                    {
                                        name: 'Data_Communication_Ch_7.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/it-datacomm-ch7/view'
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
                                        downloadUrl: 'https://drive.google.com/file/d/is-file-summary-part2/view'
                                    },
                                    {
                                        name: 'Files Lectures Summary Part1.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/is-files-summary-part1/view'
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
                                        downloadUrl: 'https://drive.google.com/file/d/is-os-chapter2/view'
                                    },
                                    {
                                        name: 'OS Chapter 6.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/is-os-chapter6/view'
                                    },
                                    {
                                        name: 'OS Chapter 8.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/is-os-chapter8/view'
                                    },
                                    {
                                        name: 'OS Chapter 9 Summary.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/is-os-chapter9-summary/view'
                                    },
                                    {
                                        name: 'OS chapter one 1.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/is-os-chapter1/view'
                                    },
                                    {
                                        name: 'OS Summary 3&5.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/is-os-summary-35/view'
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
                                        downloadUrl: 'https://drive.google.com/file/d/signals-summation/view'
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
                                        downloadUrl: 'https://drive.google.com/file/d/signals-classification-systems/view'
                                    },
                                    {
                                        name: 'Introduction.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/signals-introduction/view'
                                    },
                                    {
                                        name: 'Signals Classification.pdf',
                                        type: 'file',
                                        downloadUrl: 'https://drive.google.com/file/d/signals-classification/view'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// Export the data for use in other files
window.mockAcademicData = mockAcademicData;