'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' : 'data-bs-target="#xs-controllers-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' :
                                            'id="xs-controllers-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' : 'data-bs-target="#xs-injectables-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' :
                                        'id="xs-injectables-links-module-AppModule-7ab66564e109eeb7c81f1f3e259beb300c1b6eac13401a33b20571eed77b6a9eec60f553f1310720f760982f41c5e2af5350750c185e5cb5f09f5c1e53db8b38"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' :
                                            'id="xs-controllers-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' :
                                        'id="xs-injectables-links-module-AuthModule-de3b37e2f7aefe29dd6abdf89a7d0366195963a306794f495ded69f0cfbe3a94a50f7fb1af226d197cc3ad9b7e435921093f9571e4d23e1e1e014f91017308aa"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' :
                                            'id="xs-controllers-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' :
                                        'id="xs-injectables-links-module-PostsModule-0af3976e70314163cadc0299ce779bb3a2bbc6c40a744fde061e3e1e8b3de711c7b871bfd9f6f81c806d2b142ed80e9cf27afc2e0915427f63a3e91098c1de97"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SampleModule.html" data-type="entity-link" >SampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' : 'data-bs-target="#xs-controllers-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' :
                                            'id="xs-controllers-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' }>
                                            <li class="link">
                                                <a href="controllers/SampleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SampleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' : 'data-bs-target="#xs-injectables-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' :
                                        'id="xs-injectables-links-module-SampleModule-2d1c9e47c67ddd84aef545fe7f644dd7ac33371a6b863b70764874e2c70847ed047055620d93cfc612590234c8332d1cd12043ad4c30c5cefb16d700eb7a7f48"' }>
                                        <li class="link">
                                            <a href="injectables/SampleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SampleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' :
                                            'id="xs-controllers-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' :
                                        'id="xs-injectables-links-module-UsersModule-c4cbd3ae807374f99487c0bca187be5ef28d76fd84d065d925d97e8f53986798e8b8a69ecf5c090354dafc6ba1235acb72dafa44cfcac8dbe2e4eccf56d469fe"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddressDto.html" data-type="entity-link" >AddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDTO.html" data-type="entity-link" >CreatePostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDTO.html" data-type="entity-link" >CreatePostMetaOptionsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSampleDto.html" data-type="entity-link" >CreateSampleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserQueryParamDto.html" data-type="entity-link" >GetUserQueryParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserRouteParamRequiredDto.html" data-type="entity-link" >GetUserRouteParamRequiredDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersRouteParamDto.html" data-type="entity-link" >GetUsersRouteParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDTO.html" data-type="entity-link" >PatchPostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sample.html" data-type="entity-link" >Sample</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSampleDto.html" data-type="entity-link" >UpdateSampleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});