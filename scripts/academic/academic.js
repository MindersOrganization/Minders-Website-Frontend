// Configuration for items to exclude from display
const EXCLUDED_ITEMS = [
    '.DS_Store',
    'Thumbs.db',
    '.gitignore',
    '.git',
    'node_modules',
    '.vscode',
    '.idea',
    'temp',
    'tmp'
];

// File type icons mapping
const FILE_ICONS = {
    'pdf': '📄',
    'doc': '📝',
    'docx': '📝',
    'ppt': '📊',
    'pptx': '📊',
    'xls': '📈',
    'xlsx': '📈',
    'txt': '📃',
    'jpg': '🖼️',
    'jpeg': '🖼️',
    'png': '🖼️',
    'gif': '🖼️',
    'mp4': '🎥',
    'avi': '🎥',
    'mov': '🎥',
    'mp3': '🎵',
    'wav': '🎵',
    'zip': '📦',
    'rar': '📦',
    'default': '📄'
};

class AcademicResourceManager {
    constructor() {
        this.academicContent = document.getElementById('academicContent');
        this.loadMockData();
    }

    loadMockData() {
        // Check if mock data is available
        if (typeof window.mockAcademicData === 'undefined') {
            this.academicContent.innerHTML = `
                <div class="error-message">
                    <h2>Error Loading Data</h2>
                    <p>Mock data file not loaded. Please make sure mockData.js is included.</p>
                </div>
            `;
            return;
        }

        this.renderAllSections(window.mockAcademicData);
    }

    renderAllSections(sectionsArray) {
        let content = '';
        sectionsArray.forEach(section => {
            content += this.buildContentStructure(section, section.name, 0);
        });
        this.academicContent.innerHTML = content;
        this.attachToggleListeners();
    }

    buildContentStructure(item, title, level = 0) {
        if (this.shouldExcludeItem(item.name)) {
            return '';
        }

        if (item.type === 'file') {
            return this.createFileElement(item);
        } else if (item.type === 'folder') {
            return this.createFolderElement(item, title, level);
        }

        return '';
    }

    createFileElement(file) {
        const extension = file.name.split('.').pop().toLowerCase();
        const icon = FILE_ICONS[extension] || FILE_ICONS.default;

        let metaInfo = '';
        if (file.size) {
            const sizeInMB = (parseInt(file.size) / (1024 * 1024)).toFixed(2);
            metaInfo = `<span class="file-meta">${sizeInMB} MB</span>`;
        }

        return `
            <div class="file-item">
                <span class="file-icon">${icon}</span>
                <a href="${file.downloadUrl}" target="_blank" rel="noopener noreferrer">
                    ${file.name}
                </a>
                ${metaInfo}
            </div>
        `;
    }

    createFolderElement(folder, title, level) {
        const isRoot = level === 0;
        const folderId = `folder-${Math.random().toString(36).substr(2, 9)}`;

        let content = '';

        if (isRoot) {
            content += `<div class="academic-section">`;
            content += `<div class="section-header" data-target="${folderId}">`;
            content += `<span class="toggle-icon">▼</span>`;
            content += `<span>${title}</span>`;
            content += `</div>`;
            content += `<div class="section-content" id="${folderId}">`;
        } else {
            content += `<div class="folder-container">`;
            content += `<div class="folder-header" data-target="${folderId}">`;
            content += `<span class="folder-icon">📁</span>`;
            content += `<span class="folder-toggle-icon">▼</span>`;
            content += `<strong>${folder.name}</strong>`;

            // Add link icon if folder has a link
            if (folder.link) {
                content += `<a href="${folder.link}" target="_blank" rel="noopener noreferrer" class="folder-link-icon" onclick="event.stopPropagation();">🔗</a>`;
            }

            content += `</div>`;
            content += `<div class="folder-content" id="${folderId}">`;
        }

        if (folder.children && folder.children.length > 0) {
            folder.children.forEach(child => {
                content += this.buildContentStructure(child, child.name, level + 1);
            });
        }

        content += isRoot ? `</div></div>` : `</div></div>`;

        return content;
    }

    shouldExcludeItem(itemName) {
        return EXCLUDED_ITEMS.some(excluded =>
            itemName.toLowerCase().includes(excluded.toLowerCase())
        );
    }

    attachToggleListeners() {
        const toggleHeaders = document.querySelectorAll('.section-header, .folder-header');

        toggleHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const targetId = header.getAttribute('data-target');
                const content = document.getElementById(targetId);
                const icon = header.querySelector('.toggle-icon, .folder-toggle-icon');

                if (content.classList.contains('collapsed')) {
                    content.classList.remove('collapsed');
                    header.classList.remove('collapsed');
                    icon.textContent = '▼';
                } else {
                    content.classList.add('collapsed');
                    header.classList.add('collapsed');
                    icon.textContent = '▶';
                }
            });
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const manager = new AcademicResourceManager();

    // Add some enhanced interactions
    addEnhancedInteractions();
});

function addEnhancedInteractions() {
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.academic-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}
