(function (global) {
    System.config({
      // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
      transpiler: 'ts',
      typescriptOptions: {
        tsconfig: true
      },
      meta: {
        'typescript': {
          "exports": "ts"
        }
      },
      paths: {
        // paths serve as alias
        'npm:': 'https://unpkg.com/'
      },
      // map tells the System loader where to look for things
      map: {
        // our app is within the app folder
        app: 'app',
  
        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
        '@ngui/auto-complete': 'npm:@ngui/auto-complete/dist/auto-complete.umd.js',
        '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
        // other libraries
        'rxjs':                      'npm:rxjs',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
        'ts':                        'npm:plugin-typescript@4.0.10/lib/plugin.js',
        'typescript':                'npm:typescript@2.0.2/lib/typescript.js',
  
      },
      // packages tells the System loader how to load when no filename and/or no extension
      packages: {
        app: {
          main: './main.ts',
          defaultExtension: 'ts'
        },
        rxjs: {
          defaultExtension: 'js'
        },
        'angular-in-memory-web-api': {
          main: './index.js',
          defaultExtension: 'js'
        }
      }
    });
  })(this);