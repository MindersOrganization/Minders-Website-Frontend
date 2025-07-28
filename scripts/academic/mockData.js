// Mock data for academic resources
// This is an array of main sections - you can add multiple sections
const mockAcademicData = [
    {
        name: 'Academic Resources',
        type: 'folder',
        link: 'https://drive.google.com/drive/folders/1qxHV5kKdZ4-pde1dE1986sa0VDFYkxjP', // Optional: link to the actual folder
        children: [
            {
                name: 'Computer Science',
                type: 'folder',
                link: 'https://drive.google.com/drive/folders/example-cs-folder', // Optional: direct link to this folder
                children: [
                    {
                        name: 'Data Structures',
                        type: 'folder',
                        children: [
                            {
                                name: 'Linked Lists.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/example-file-id/view'
                            },
                            {
                                name: 'Trees and Graphs.pptx',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/example-file-id2/view'
                            },
                            {
                                name: 'Hash Tables.docx',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/example-file-id3/view'
                            }
                        ]
                    },
                    {
                        name: 'Algorithms',
                        type: 'folder',
                        link: 'https://drive.google.com/drive/folders/example-algorithms-folder',
                        children: [
                            {
                                name: 'Sorting Algorithms.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/example-file-id4/view'
                            },
                            {
                                name: 'Dynamic Programming.pdf',
                                type: 'file',
                                downloadUrl: 'https://drive.google.com/file/d/example-file-id5/view'
                            }
                        ]
                    },
                    {
                        name: 'CS Syllabus.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/example-file-id6/view'
                    }
                ]
            },
            {
                name: 'Mathematics',
                type: 'folder',
                children: [
                    {
                        name: 'Calculus Notes.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/example-file-id7/view'
                    },
                    {
                        name: 'Linear Algebra.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/example-file-id8/view'
                    },
                    {
                        name: 'Statistics Formulas.xlsx',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/example-file-id9/view'
                    }
                ]
            },
            {
                name: 'Research Papers',
                type: 'folder',
                link: 'https://drive.google.com/drive/folders/example-research-folder',
                children: [
                    {
                        name: 'AI in Education.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/example-file-id10/view'
                    },
                    {
                        name: 'Machine Learning Trends.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/example-file-id11/view'
                    }
                ]
            },
            {
                name: 'Academic Calendar.pdf',
                type: 'file',
                downloadUrl: 'https://drive.google.com/file/d/example-file-id12/view'
            }
        ]
    },
    {
        name: 'Academic Resources 2',
        type: 'folder',
        link: 'https://drive.google.com/drive/folders/another-folder-id',
        children: [
            {
                name: 'Physics',
                type: 'folder',
                children: [
                    {
                        name: 'Quantum Mechanics.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/physics-file-id/view'
                    },
                    {
                        name: 'Thermodynamics.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/physics-file-id2/view'
                    }
                ]
            },
            {
                name: 'Chemistry',
                type: 'folder',
                children: [
                    {
                        name: 'Organic Chemistry.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/chem-file-id/view'
                    }
                ]
            }
        ]
    },
    {
        name: 'Academic Resources 3',
        type: 'folder',
        children: [
            {
                name: 'Biology',
                type: 'folder',
                children: [
                    {
                        name: 'Cell Biology.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/bio-file-id/view'
                    },
                    {
                        name: 'Genetics.pdf',
                        type: 'file',
                        downloadUrl: 'https://drive.google.com/file/d/bio-file-id2/view'
                    }
                ]
            }
        ]
    }
];

// Export the data for use in other files
window.mockAcademicData = mockAcademicData;