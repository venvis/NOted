module.exports = {
  packagerConfig: {
    icon: './images/notes',
    asar:true
  },

  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'NOted',            
        setupExe: 'NOted',    
        setupIcon: './images/notes.ico',
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      platforms: ['darwin'],
      config: {
        icon: './images/notes.icns'
      }
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './images/notes.png'
        }
      },
    },
  
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  publishers: [
    {
      
        name: '@electron-forge/maker-dmg',
        config: {
          background: './images/notes.icns',
          format: 'ULFO'
        }
      
    },
    {
      name: '@electron-forge/publisher-github',
      config: {
        
        repository: 'NOted',
      }
    }
  ]
};
