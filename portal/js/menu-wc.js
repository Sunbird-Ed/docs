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
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/sunbird_logo.png">
                    </a>
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
                                            'data-bs-target="#components-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' : 'data-bs-target="#xs-components-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' :
                                            'id="xs-components-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' :
                                        'id="xs-injectables-links-module-AppModule-019e85b8eeeea525ed24e71ec88a3b31a3fdf5b7329f42059715c76adc1aa8f919d760b565f8b4d7118ee9896b2883d4b3fc26cd91fdcf09a126d78be24d730a"' }>
                                        <li class="link">
                                            <a href="injectables/CacheService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CacheService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BadgingModule.html" data-type="entity-link" >BadgingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' : 'data-bs-target="#xs-components-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' :
                                            'id="xs-components-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' }>
                                            <li class="link">
                                                <a href="components/AssignBadgesContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignBadgesContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentBadgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentBadgeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' : 'data-bs-target="#xs-injectables-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' :
                                        'id="xs-injectables-links-module-BadgingModule-8d2dcd9f230a8a92aeb0739271b1d51a13f91e9adeb6c123f55ac3e47c9ea7ba66d37181da689a5d084fe6a42e86593dacf21fe0b705384595857b7a72edcd87"' }>
                                        <li class="link">
                                            <a href="injectables/ContentBadgeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentBadgeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BatchModule.html" data-type="entity-link" >BatchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BatchModule-7f856dea20529eb2b9cd27b93b4733b47f1e862fa0e597e94bc4771509b7773100486e6a9543446fb437fb1033f9331bfe4553e5cf0ae1153df955a919f6f8c4"' : 'data-bs-target="#xs-components-links-module-BatchModule-7f856dea20529eb2b9cd27b93b4733b47f1e862fa0e597e94bc4771509b7773100486e6a9543446fb437fb1033f9331bfe4553e5cf0ae1153df955a919f6f8c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BatchModule-7f856dea20529eb2b9cd27b93b4733b47f1e862fa0e597e94bc4771509b7773100486e6a9543446fb437fb1033f9331bfe4553e5cf0ae1153df955a919f6f8c4"' :
                                            'id="xs-components-links-module-BatchModule-7f856dea20529eb2b9cd27b93b4733b47f1e862fa0e597e94bc4771509b7773100486e6a9543446fb437fb1033f9331bfe4553e5cf0ae1153df955a919f6f8c4"' }>
                                            <li class="link">
                                                <a href="components/CreateBatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnrollBatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnrollBatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateCourseBatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCourseBatchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BatchRoutingModule.html" data-type="entity-link" >BatchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CertificateModule.html" data-type="entity-link" >CertificateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CertificateModule-52ac4e971fcec0b7a16e347c94542b76faec38e044f82b338f040d97e4578bcd67b530df1ed6041b127fb371aa2b5168d362801d825354116ec93e2d572360cd"' : 'data-bs-target="#xs-components-links-module-CertificateModule-52ac4e971fcec0b7a16e347c94542b76faec38e044f82b338f040d97e4578bcd67b530df1ed6041b127fb371aa2b5168d362801d825354116ec93e2d572360cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CertificateModule-52ac4e971fcec0b7a16e347c94542b76faec38e044f82b338f040d97e4578bcd67b530df1ed6041b127fb371aa2b5168d362801d825354116ec93e2d572360cd"' :
                                            'id="xs-components-links-module-CertificateModule-52ac4e971fcec0b7a16e347c94542b76faec38e044f82b338f040d97e4578bcd67b530df1ed6041b127fb371aa2b5168d362801d825354116ec93e2d572360cd"' }>
                                            <li class="link">
                                                <a href="components/BrowseImagePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrowseImagePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CertificateConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CertificateConfigurationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CertificateDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CertificateDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateTemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SvgEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SvgEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CertificateRoutingModule.html" data-type="entity-link" >CertificateRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContentSearchModule.html" data-type="entity-link" >ContentSearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ContentSearchModule-1b6b444fea3f2823c9e358f1ec908d316e4eeaa3835753bce111d80446c904c1937064398902b5ee13e41e49ca7ac44f28d5d0f4b36863fe0ccacb2c5f3c1c8d"' : 'data-bs-target="#xs-components-links-module-ContentSearchModule-1b6b444fea3f2823c9e358f1ec908d316e4eeaa3835753bce111d80446c904c1937064398902b5ee13e41e49ca7ac44f28d5d0f4b36863fe0ccacb2c5f3c1c8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentSearchModule-1b6b444fea3f2823c9e358f1ec908d316e4eeaa3835753bce111d80446c904c1937064398902b5ee13e41e49ca7ac44f28d5d0f4b36863fe0ccacb2c5f3c1c8d"' :
                                            'id="xs-components-links-module-ContentSearchModule-1b6b444fea3f2823c9e358f1ec908d316e4eeaa3835753bce111d80446c904c1937064398902b5ee13e41e49ca7ac44f28d5d0f4b36863fe0ccacb2c5f3c1c8d"' }>
                                            <li class="link">
                                                <a href="components/DataDrivenFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataDrivenFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GlobalSearchFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GlobalSearchFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GlobalSearchSelectedFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GlobalSearchSelectedFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopicPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopicPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAllComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAllComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' : 'data-bs-target="#xs-components-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' :
                                            'id="xs-components-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' }>
                                            <li class="link">
                                                <a href="components/ContentTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanguageDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TelemetryErrorModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryErrorModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' : 'data-bs-target="#xs-directives-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' :
                                        'id="xs-directives-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' }>
                                        <li class="link">
                                            <a href="directives/BodyScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DesktopOnlyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DesktopOnlyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OnlineOnlyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnlineOnlyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PermissionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' :
                                        'id="xs-injectables-links-module-CoreModule-8e045979eebb19669ad44e5e54d1efbad35fcbc2f09f7f1642e96e37f64bdbd2cfdc3d8df82d0615ad154be816d13500853b357ffb16f05a9799ec26f5f50559"' }>
                                        <li class="link">
                                            <a href="injectables/CacheService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CacheService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseConsumptionModule.html" data-type="entity-link" >CourseConsumptionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CourseConsumptionModule-60ca550f6b75be301781887160dce8d9cbd500f2e59dc04ad3b0845b49f2c99aa3fb94b76f086472bd30db3616ed2974413b22ad11e63e737c9d17efdcf65deb"' : 'data-bs-target="#xs-components-links-module-CourseConsumptionModule-60ca550f6b75be301781887160dce8d9cbd500f2e59dc04ad3b0845b49f2c99aa3fb94b76f086472bd30db3616ed2974413b22ad11e63e737c9d17efdcf65deb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CourseConsumptionModule-60ca550f6b75be301781887160dce8d9cbd500f2e59dc04ad3b0845b49f2c99aa3fb94b76f086472bd30db3616ed2974413b22ad11e63e737c9d17efdcf65deb"' :
                                            'id="xs-components-links-module-CourseConsumptionModule-60ca550f6b75be301781887160dce8d9cbd500f2e59dc04ad3b0845b49f2c99aa3fb94b76f086472bd30db3616ed2974413b22ad11e63e737c9d17efdcf65deb"' }>
                                            <li class="link">
                                                <a href="components/AssessmentPlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssessmentPlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CertificateNameUpdatePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CertificateNameUpdatePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseCompletionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseCompletionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseConsumptionHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseConsumptionHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseConsumptionPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseConsumptionPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursePlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursePlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurriculumCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurriculumCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnEnrollBatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnEnrollBatchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseConsumptionRoutingModule.html" data-type="entity-link" >CourseConsumptionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CourseModule.html" data-type="entity-link" >CourseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' : 'data-bs-target="#xs-components-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' :
                                            'id="xs-components-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' }>
                                            <li class="link">
                                                <a href="components/ExploreCourseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreCourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicBatchDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicBatchDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicCourseConsumptionPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicCourseConsumptionPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicCoursePlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicCoursePlayerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' : 'data-bs-target="#xs-injectables-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' :
                                        'id="xs-injectables-links-module-CourseModule-877aa4fbe3b53a0fcef91fc2681bcbefda40594739b8ffd4194aebe3e300c7fde9db3b8b84b5fbe5c2efbffb62829d40bf2fe3f27664f539adeeae5d5010a87e"' }>
                                        <li class="link">
                                            <a href="injectables/CourseBatchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseBatchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseConsumptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseConsumptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseProgressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseProgressService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseRoutingModule.html" data-type="entity-link" >CourseRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' : 'data-bs-target="#xs-components-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' :
                                            'id="xs-components-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' }>
                                            <li class="link">
                                                <a href="components/AddSummaryModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSummaryModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseConsumptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseConsumptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseProgressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseProgressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatasetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatasetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListAllReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAllReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrganisationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganisationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReIssueCertificateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReIssueCertificateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsageReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsageReportsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' : 'data-bs-target="#xs-injectables-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' :
                                        'id="xs-injectables-links-module-DashboardModule-3f1fdcd6567d31447d215e327ce8732da370c7c92543adf8883097271c8dcaca8510c4f2aae8f7d79d80b0b1518b6d4a0ebcb327f62e3dd29b4d936e1253ba08"' }>
                                        <li class="link">
                                            <a href="injectables/CourseConsumptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseConsumptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseProgressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseProgressService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DashboardUtilsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardUtilsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DownloadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LineChartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineChartService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrganisationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganisationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RendererService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RendererService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DialCodeSearchModule.html" data-type="entity-link" >DialCodeSearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DialCodeSearchModule-644a1d75abba0f2eb7cf60c8d9d6e1b8c34439e82180df00fe4a240da3946583f437d3154613016efb7665c459cbc02b1bcb8f439b44151653324791172d3595"' : 'data-bs-target="#xs-components-links-module-DialCodeSearchModule-644a1d75abba0f2eb7cf60c8d9d6e1b8c34439e82180df00fe4a240da3946583f437d3154613016efb7665c459cbc02b1bcb8f439b44151653324791172d3595"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DialCodeSearchModule-644a1d75abba0f2eb7cf60c8d9d6e1b8c34439e82180df00fe4a240da3946583f437d3154613016efb7665c459cbc02b1bcb8f439b44151653324791172d3595"' :
                                            'id="xs-components-links-module-DialCodeSearchModule-644a1d75abba0f2eb7cf60c8d9d6e1b8c34439e82180df00fe4a240da3946583f437d3154613016efb7665c459cbc02b1bcb8f439b44151653324791172d3595"' }>
                                            <li class="link">
                                                <a href="components/DialCodeCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialCodeCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialCodeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialCodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DialCodeSearchRoutingModule.html" data-type="entity-link" >DialCodeSearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DiscussionModule.html" data-type="entity-link" >DiscussionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' : 'data-bs-target="#xs-components-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' :
                                            'id="xs-components-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' }>
                                            <li class="link">
                                                <a href="components/AccessDiscussionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessDiscussionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForumComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' : 'data-bs-target="#xs-injectables-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' :
                                        'id="xs-injectables-links-module-DiscussionModule-89fb01b37f7a28450de4b23f44a19fb88518d45586dcfe8219169007f682c95aced1fd6c1ee591504538b8eec92b349c29d7049b773c6b12d52b97a48076ecd7"' }>
                                        <li class="link">
                                            <a href="injectables/DiscussionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscussionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DiscussionRoutingModule.html" data-type="entity-link" >DiscussionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreModule.html" data-type="entity-link" >ExploreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExploreModule-7f4a0698725a08c6233bd6de0d389d7d40d344c89ebff5ffe7c1429996a4fd8d7070137f6b41292ab9c966f21de9bd23dd48588b5e7df816f4cc6d36b2d0a34f"' : 'data-bs-target="#xs-components-links-module-ExploreModule-7f4a0698725a08c6233bd6de0d389d7d40d344c89ebff5ffe7c1429996a4fd8d7070137f6b41292ab9c966f21de9bd23dd48588b5e7df816f4cc6d36b2d0a34f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreModule-7f4a0698725a08c6233bd6de0d389d7d40d344c89ebff5ffe7c1429996a4fd8d7070137f6b41292ab9c966f21de9bd23dd48588b5e7df816f4cc6d36b2d0a34f"' :
                                            'id="xs-components-links-module-ExploreModule-7f4a0698725a08c6233bd6de0d389d7d40d344c89ebff5ffe7c1429996a4fd8d7070137f6b41292ab9c966f21de9bd23dd48588b5e7df816f4cc6d36b2d0a34f"' }>
                                            <li class="link">
                                                <a href="components/ExploreContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExploreCurriculumCoursesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreCurriculumCoursesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExplorePageModule.html" data-type="entity-link" >ExplorePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExplorePageModule-f4620d2d6919e7e979d37bba4c6c042e0e8837ba429f9f4c8b4bdf7c24df1e37fa9463a0bedebcf9b707e7b3b29fe087b57460532cea38f6b587b8bc45514be3"' : 'data-bs-target="#xs-components-links-module-ExplorePageModule-f4620d2d6919e7e979d37bba4c6c042e0e8837ba429f9f4c8b4bdf7c24df1e37fa9463a0bedebcf9b707e7b3b29fe087b57460532cea38f6b587b8bc45514be3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExplorePageModule-f4620d2d6919e7e979d37bba4c6c042e0e8837ba429f9f4c8b4bdf7c24df1e37fa9463a0bedebcf9b707e7b3b29fe087b57460532cea38f6b587b8bc45514be3"' :
                                            'id="xs-components-links-module-ExplorePageModule-f4620d2d6919e7e979d37bba4c6c042e0e8837ba429f9f4c8b4bdf7c24df1e37fa9463a0bedebcf9b707e7b3b29fe087b57460532cea38f6b587b8bc45514be3"' }>
                                            <li class="link">
                                                <a href="components/ExplorePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExplorePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExplorePageRoutingModule.html" data-type="entity-link" >ExplorePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreRoutingModule.html" data-type="entity-link" >ExploreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GroupModule.html" data-type="entity-link" >GroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GroupModule-b0a93eb8567bb546d4f4362d04158e0e27e350c1952f1183998ee44caeb8847d18e896f0b232661103e06daef61d0ef04f3b04c4d98ef4603d8b6e9daea22918"' : 'data-bs-target="#xs-components-links-module-GroupModule-b0a93eb8567bb546d4f4362d04158e0e27e350c1952f1183998ee44caeb8847d18e896f0b232661103e06daef61d0ef04f3b04c4d98ef4603d8b6e9daea22918"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GroupModule-b0a93eb8567bb546d4f4362d04158e0e27e350c1952f1183998ee44caeb8847d18e896f0b232661103e06daef61d0ef04f3b04c4d98ef4603d8b6e9daea22918"' :
                                            'id="xs-components-links-module-GroupModule-b0a93eb8567bb546d4f4362d04158e0e27e350c1952f1183998ee44caeb8847d18e896f0b232661103e06daef61d0ef04f3b04c4d98ef4603d8b6e9daea22918"' }>
                                            <li class="link">
                                                <a href="components/ExploreFtuPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreFtuPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExploreGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreGroupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupRoutingModule.html" data-type="entity-link" >GroupRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GroupsModule.html" data-type="entity-link" >GroupsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' : 'data-bs-target="#xs-components-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' :
                                            'id="xs-components-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' }>
                                            <li class="link">
                                                <a href="components/ActivityDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivitySearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitySearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddActivityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddActivityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddActivityContentTypesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddActivityContentTypesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddMemberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddMemberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BackButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateEditGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateEditGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FtuPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FtuPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupMembersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupMembersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemberActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyGroupsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyGroupsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoGroupResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoGroupResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' : 'data-bs-target="#xs-directives-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' :
                                        'id="xs-directives-links-module-GroupsModule-d2595b33c4e2d493b94fd3b797cd91c10a1ba203f50ae6d2482354e207511767713b2b8c76e2691bd7af74fb75edefb3dc96aa7425bc77b3d97e34baa4f73d9e"' }>
                                        <li class="link">
                                            <a href="directives/ActivityDashboardDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityDashboardDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupsRoutingModule.html" data-type="entity-link" >GroupsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GuestProfileModule.html" data-type="entity-link" >GuestProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GuestProfileModule-2fd250502fcde7f7f1276b117cf34e20efedad89f26f574eba2512e108f56ecdcb67a0396598cda0e1008b4e273ead8c02a45f8b2349993707f05c207496dbd6"' : 'data-bs-target="#xs-components-links-module-GuestProfileModule-2fd250502fcde7f7f1276b117cf34e20efedad89f26f574eba2512e108f56ecdcb67a0396598cda0e1008b4e273ead8c02a45f8b2349993707f05c207496dbd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GuestProfileModule-2fd250502fcde7f7f1276b117cf34e20efedad89f26f574eba2512e108f56ecdcb67a0396598cda0e1008b4e273ead8c02a45f8b2349993707f05c207496dbd6"' :
                                            'id="xs-components-links-module-GuestProfileModule-2fd250502fcde7f7f1276b117cf34e20efedad89f26f574eba2512e108f56ecdcb67a0396598cda0e1008b4e273ead8c02a45f8b2349993707f05c207496dbd6"' }>
                                            <li class="link">
                                                <a href="components/GuestProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuestProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuestProfileRoutingModule.html" data-type="entity-link" >GuestProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link" >HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HelpModule-d5dfefcfd9a41ae0658bd81cb31d95ddc85cb24949179a09bca0256aa49cb920d60f5a2a75754eacf5fda57416e3c77f6ff9fe2ab3d510c2e50b367907777206"' : 'data-bs-target="#xs-components-links-module-HelpModule-d5dfefcfd9a41ae0658bd81cb31d95ddc85cb24949179a09bca0256aa49cb920d60f5a2a75754eacf5fda57416e3c77f6ff9fe2ab3d510c2e50b367907777206"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-d5dfefcfd9a41ae0658bd81cb31d95ddc85cb24949179a09bca0256aa49cb920d60f5a2a75754eacf5fda57416e3c77f6ff9fe2ab3d510c2e50b367907777206"' :
                                            'id="xs-components-links-module-HelpModule-d5dfefcfd9a41ae0658bd81cb31d95ddc85cb24949179a09bca0256aa49cb920d60f5a2a75754eacf5fda57416e3c77f6ff9fe2ab3d510c2e50b367907777206"' }>
                                            <li class="link">
                                                <a href="components/FaqComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaqReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfflineHelpVideosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfflineHelpVideosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpRoutingModule.html" data-type="entity-link" >HelpRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LearnModule.html" data-type="entity-link" >LearnModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LearnModule-6ee71f826b4261b1a61856cbbf0e23837cd479589fca7d307708069206b8b508d325a775eece988531aaa12268ae549c424ef095495b0dabe7e1693b54c76e79"' : 'data-bs-target="#xs-components-links-module-LearnModule-6ee71f826b4261b1a61856cbbf0e23837cd479589fca7d307708069206b8b508d325a775eece988531aaa12268ae549c424ef095495b0dabe7e1693b54c76e79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LearnModule-6ee71f826b4261b1a61856cbbf0e23837cd479589fca7d307708069206b8b508d325a775eece988531aaa12268ae549c424ef095495b0dabe7e1693b54c76e79"' :
                                            'id="xs-components-links-module-LearnModule-6ee71f826b4261b1a61856cbbf0e23837cd479589fca7d307708069206b8b508d325a775eece988531aaa12268ae549c424ef095495b0dabe7e1693b54c76e79"' }>
                                            <li class="link">
                                                <a href="components/CoursePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LearnRoutingModule.html" data-type="entity-link" >LearnRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LocationModule.html" data-type="entity-link" >LocationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LocationModule-2e10a246bf5e396cad0a456e8ecc4431e3ccd01b81708951946af9de5cb6dd599d61bf879ebd38637d5e955e9e3a163d5faec4c4b85ec736f2e5863214fb8c3b"' : 'data-bs-target="#xs-components-links-module-LocationModule-2e10a246bf5e396cad0a456e8ecc4431e3ccd01b81708951946af9de5cb6dd599d61bf879ebd38637d5e955e9e3a163d5faec4c4b85ec736f2e5863214fb8c3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LocationModule-2e10a246bf5e396cad0a456e8ecc4431e3ccd01b81708951946af9de5cb6dd599d61bf879ebd38637d5e955e9e3a163d5faec4c4b85ec736f2e5863214fb8c3b"' :
                                            'id="xs-components-links-module-LocationModule-2e10a246bf5e396cad0a456e8ecc4431e3ccd01b81708951946af9de5cb6dd599d61bf879ebd38637d5e955e9e3a163d5faec4c4b85ec736f2e5863214fb8c3b"' }>
                                            <li class="link">
                                                <a href="components/LocationSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationSelectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManageModule.html" data-type="entity-link" >ManageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' : 'data-bs-target="#xs-components-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' :
                                            'id="xs-components-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' }>
                                            <li class="link">
                                                <a href="components/UserOrgManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserOrgManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRoleAssignComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRoleAssignComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' : 'data-bs-target="#xs-injectables-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' :
                                        'id="xs-injectables-links-module-ManageModule-4718ce248aca84a24d0e3a07252f012ddf1369dde7ab2a9ec8ada64c83d267bc906931e35af41f92556262c409722484fd89a8614494b14bd14b7e9cde74a92c"' }>
                                        <li class="link">
                                            <a href="injectables/ManageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManageRoutingModule.html" data-type="entity-link" >ManageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MergeAccountModule.html" data-type="entity-link" >MergeAccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MergeAccountModule-7601b661257840ca23abe894ee821ff293fe633dc98d9240110f7ddbbadc1d9d01d6589c92fbfec212390b043a33be731a5ec3d60662c7728dd62fc564cabd49"' : 'data-bs-target="#xs-components-links-module-MergeAccountModule-7601b661257840ca23abe894ee821ff293fe633dc98d9240110f7ddbbadc1d9d01d6589c92fbfec212390b043a33be731a5ec3d60662c7728dd62fc564cabd49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MergeAccountModule-7601b661257840ca23abe894ee821ff293fe633dc98d9240110f7ddbbadc1d9d01d6589c92fbfec212390b043a33be731a5ec3d60662c7728dd62fc564cabd49"' :
                                            'id="xs-components-links-module-MergeAccountModule-7601b661257840ca23abe894ee821ff293fe633dc98d9240110f7ddbbadc1d9d01d6589c92fbfec212390b043a33be731a5ec3d60662c7728dd62fc564cabd49"' }>
                                            <li class="link">
                                                <a href="components/MergeAccountStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MergeAccountStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MergeAccountRoutingModule.html" data-type="entity-link" >MergeAccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NotificationModule-3d9b2f0c69344c577a7b419b9d377388f691d9e19faff1c803394ad0f634e563b654081513d8ec1c3618b8f5125125a0fe1ce4a22be1c00bc618d97d58322b79"' : 'data-bs-target="#xs-components-links-module-NotificationModule-3d9b2f0c69344c577a7b419b9d377388f691d9e19faff1c803394ad0f634e563b654081513d8ec1c3618b8f5125125a0fe1ce4a22be1c00bc618d97d58322b79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationModule-3d9b2f0c69344c577a7b419b9d377388f691d9e19faff1c803394ad0f634e563b654081513d8ec1c3618b8f5125125a0fe1ce4a22be1c00bc618d97d58322b79"' :
                                            'id="xs-components-links-module-NotificationModule-3d9b2f0c69344c577a7b419b9d377388f691d9e19faff1c803394ad0f634e563b654081513d8ec1c3618b8f5125125a0fe1ce4a22be1c00bc618d97d58322b79"' }>
                                            <li class="link">
                                                <a href="components/InAppNotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InAppNotificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObservationModule.html" data-type="entity-link" >ObservationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ObservationModule-08e7d7f5f75b54afeefd18b7197f0a8eb1d976cb90464dda6ec67947a720447db1c2059b89189c483e1ce370eff5ec7fba8d68a4d72d6577c12a080d92d70ca2"' : 'data-bs-target="#xs-components-links-module-ObservationModule-08e7d7f5f75b54afeefd18b7197f0a8eb1d976cb90464dda6ec67947a720447db1c2059b89189c483e1ce370eff5ec7fba8d68a4d72d6577c12a080d92d70ca2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObservationModule-08e7d7f5f75b54afeefd18b7197f0a8eb1d976cb90464dda6ec67947a720447db1c2059b89189c483e1ce370eff5ec7fba8d68a4d72d6577c12a080d92d70ca2"' :
                                            'id="xs-components-links-module-ObservationModule-08e7d7f5f75b54afeefd18b7197f0a8eb1d976cb90464dda6ec67947a720447db1c2059b89189c483e1ce370eff5ec7fba8d68a4d72d6577c12a080d92d70ca2"' }>
                                            <li class="link">
                                                <a href="components/AddEntityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEntityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditSubmissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditSubmissionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntityListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObservationDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObservationListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObservationListingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmissionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmissionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObservationRoutingModule.html" data-type="entity-link" >ObservationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OfflineModule.html" data-type="entity-link" >OfflineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' : 'data-bs-target="#xs-components-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' :
                                            'id="xs-components-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentManagerInfoPopUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentManagerInfoPopUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibraryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibraryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TelemetryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TelemetryImportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryImportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' : 'data-bs-target="#xs-injectables-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' :
                                        'id="xs-injectables-links-module-OfflineModule-bdcdb5a88a4d5d089174e847a41b26345a6009e00a1196f687f331c18dedb5b346c4055d2a40c408d9d2dfcf75be22cebaa6788c6172a7aa1a46973121da1e3e"' }>
                                        <li class="link">
                                            <a href="injectables/ContentManagerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentManagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OfflineRoutingModule.html" data-type="entity-link" >OfflineRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrgManagementModule.html" data-type="entity-link" >OrgManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' : 'data-bs-target="#xs-components-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' :
                                            'id="xs-components-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' }>
                                            <li class="link">
                                                <a href="components/CreateOrgTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateOrgTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrganizationUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewOrgTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewOrgTypeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' : 'data-bs-target="#xs-injectables-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' :
                                        'id="xs-injectables-links-module-OrgManagementModule-398e05c4a5f828372ea751c32d75b7761623d292d8e2debdccd63fd32b86174cca357168b89297d6de2b4530a99f7e1d417493835b89aeac88359e856c99e2a7"' }>
                                        <li class="link">
                                            <a href="injectables/OrgManagementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrgManagementService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrgTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrgTypeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RouterNavigationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouterNavigationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrgManagementRoutingModule.html" data-type="entity-link" >OrgManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerHelperModule.html" data-type="entity-link" >PlayerHelperModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PlayerHelperModule-018664f745cea173916352e7b88ed860ac4f3608414e68d814b3ef8c8d3f8c29fcd2b3523b757d21acc812cf3d37ed9ee72eb56be3b140e3287caf13a4c95c6e"' : 'data-bs-target="#xs-components-links-module-PlayerHelperModule-018664f745cea173916352e7b88ed860ac4f3608414e68d814b3ef8c8d3f8c29fcd2b3523b757d21acc812cf3d37ed9ee72eb56be3b140e3287caf13a4c95c6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlayerHelperModule-018664f745cea173916352e7b88ed860ac4f3608414e68d814b3ef8c8d3f8c29fcd2b3523b757d21acc812cf3d37ed9ee72eb56be3b140e3287caf13a4c95c6e"' :
                                            'id="xs-components-links-module-PlayerHelperModule-018664f745cea173916352e7b88ed860ac4f3608414e68d814b3ef8c8d3f8c29fcd2b3523b757d21acc812cf3d37ed9ee72eb56be3b140e3287caf13a4c95c6e"' }>
                                            <li class="link">
                                                <a href="components/CollectionPlayerMetadataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionPlayerMetadataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommingSoonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommingSoonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentChapterlistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentChapterlistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentCreditsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentCreditsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentLicenceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentLicenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentPlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentPlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentPlayerMetadataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentPlayerMetadataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentPlayerPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentPlayerPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentRatingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentRatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreditsAndLicenceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditsAndLicenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurriculumInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurriculumInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FancyTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FancyTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerModule.html" data-type="entity-link" >PlayerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerModule.html" data-type="entity-link" >PlayerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerRoutingModule.html" data-type="entity-link" >PlayerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerRoutingModule.html" data-type="entity-link" >PlayerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProfileModule-d9c7defbdd23dc22cb8bd57c1030acefc5a67d12b7eca0ff86b52a40f1ec59b2efd81cf227114d28236405bf40fc82aac4a994e234cda3bc5b1ded96b232b1e4"' : 'data-bs-target="#xs-components-links-module-ProfileModule-d9c7defbdd23dc22cb8bd57c1030acefc5a67d12b7eca0ff86b52a40f1ec59b2efd81cf227114d28236405bf40fc82aac4a994e234cda3bc5b1ded96b232b1e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-d9c7defbdd23dc22cb8bd57c1030acefc5a67d12b7eca0ff86b52a40f1ec59b2efd81cf227114d28236405bf40fc82aac4a994e234cda3bc5b1ded96b232b1e4"' :
                                            'id="xs-components-links-module-ProfileModule-d9c7defbdd23dc22cb8bd57c1030acefc5a67d12b7eca0ff86b52a40f1ec59b2efd81cf227114d28236405bf40fc82aac4a994e234cda3bc5b1ded96b232b1e4"' }>
                                            <li class="link">
                                                <a href="components/AccountRecoveryInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountRecoveryInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChooseUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChooseUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileBadgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileBadgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmitTeacherDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmitTeacherDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateContactDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateContactDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/programDashboardModule.html" data-type="entity-link" >programDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' : 'data-bs-target="#xs-components-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' :
                                            'id="xs-components-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' }>
                                            <li class="link">
                                                <a href="components/DatasetsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatasetsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdFiltersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdFiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbBignumberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbBignumberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' : 'data-bs-target="#xs-injectables-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' :
                                        'id="xs-injectables-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' }>
                                        <li class="link">
                                            <a href="injectables/ResourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToasterService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' : 'data-bs-target="#xs-pipes-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' :
                                            'id="xs-pipes-links-module-programDashboardModule-644b1cc72bf36082ee8f2e95628833e21c4dbd7f573c700c1ee1ec17c305984ba0042ec242b6906aedc1415f5f1da91fa65fc1e0058bc02e6e88438a71f141b6"' }>
                                            <li class="link">
                                                <a href="pipes/BigDataPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BigDataPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ChartTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartTypePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterChartPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterChartPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/programDashboardRoutingModule.html" data-type="entity-link" >programDashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' : 'data-bs-target="#xs-components-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' :
                                            'id="xs-components-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' }>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' : 'data-bs-target="#xs-injectables-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' :
                                        'id="xs-injectables-links-module-PublicModule-6b1fc0756bcc5104befa4d671c6887e2dfa1d2df3f41437a7c7e9e3adf551f98e55925ca1fdb8c8859a5ced9b196017a305b5117c86f1598c71574d32d1d9210"' }>
                                        <li class="link">
                                            <a href="injectables/PublicPlayerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicPlayerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionnaireModule.html" data-type="entity-link" >QuestionnaireModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QuestionnaireModule-4255a49aef55f6358be602e950311e8466f4ec1e3957ca9f53f1cae1c9707c092e47b0ca3ab3f9d1672f3544413340eeb31c29352fc483ff9921fa899122a62e"' : 'data-bs-target="#xs-components-links-module-QuestionnaireModule-4255a49aef55f6358be602e950311e8466f4ec1e3957ca9f53f1cae1c9707c092e47b0ca3ab3f9d1672f3544413340eeb31c29352fc483ff9921fa899122a62e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuestionnaireModule-4255a49aef55f6358be602e950311e8466f4ec1e3957ca9f53f1cae1c9707c092e47b0ca3ab3f9d1672f3544413340eeb31c29352fc483ff9921fa899122a62e"' :
                                            'id="xs-components-links-module-QuestionnaireModule-4255a49aef55f6358be602e950311e8466f4ec1e3957ca9f53f1cae1c9707c092e47b0ca3ab3f9d1672f3544413340eeb31c29352fc483ff9921fa899122a62e"' }>
                                            <li class="link">
                                                <a href="components/QuestionnaireComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionnaireComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionnaireRoutingModule.html" data-type="entity-link" >QuestionnaireRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RecoverAccountModule.html" data-type="entity-link" >RecoverAccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RecoverAccountModule-7be3e4170a5e9438a43778088067456ab09cc170600463514808f1dbc47b327a53dace1e8fbb88000f98c3e6fffeb4bb0b1a407f410df8720a8329cd6862a906"' : 'data-bs-target="#xs-components-links-module-RecoverAccountModule-7be3e4170a5e9438a43778088067456ab09cc170600463514808f1dbc47b327a53dace1e8fbb88000f98c3e6fffeb4bb0b1a407f410df8720a8329cd6862a906"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecoverAccountModule-7be3e4170a5e9438a43778088067456ab09cc170600463514808f1dbc47b327a53dace1e8fbb88000f98c3e6fffeb4bb0b1a407f410df8720a8329cd6862a906"' :
                                            'id="xs-components-links-module-RecoverAccountModule-7be3e4170a5e9438a43778088067456ab09cc170600463514808f1dbc47b327a53dace1e8fbb88000f98c3e6fffeb4bb0b1a407f410df8720a8329cd6862a906"' }>
                                            <li class="link">
                                                <a href="components/IdentifyAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentifyAccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecoverAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoverAccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectAccountIdentifierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectAccountIdentifierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerifyAccountIdentifierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerifyAccountIdentifierComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecoverAccountRoutingModule.html" data-type="entity-link" >RecoverAccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReportModule.html" data-type="entity-link" >ReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ReportModule-076eccc82c030d2fecf6834ee86c5012a6cb588de7fffc84d586426853736df0a3f1e25b6c421529398102dc66ff43ecae4f551a1d7fc80f35de126afd99566d"' : 'data-bs-target="#xs-components-links-module-ReportModule-076eccc82c030d2fecf6834ee86c5012a6cb588de7fffc84d586426853736df0a3f1e25b6c421529398102dc66ff43ecae4f551a1d7fc80f35de126afd99566d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportModule-076eccc82c030d2fecf6834ee86c5012a6cb588de7fffc84d586426853736df0a3f1e25b6c421529398102dc66ff43ecae4f551a1d7fc80f35de126afd99566d"' :
                                            'id="xs-components-links-module-ReportModule-076eccc82c030d2fecf6834ee86c5012a6cb588de7fffc84d586426853736df0a3f1e25b6c421529398102dc66ff43ecae4f551a1d7fc80f35de126afd99566d"' }>
                                            <li class="link">
                                                <a href="components/AllEvidenceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllEvidenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntityListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolutionListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolutionListingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportRoutingModule.html" data-type="entity-link" >ReportRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResourceModule.html" data-type="entity-link" >ResourceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ResourceModule-048ff4375083130ddeb1382c0f86dc1ea28cd307d8efa8db07cb5798686e54e1edc46875c58c0b177b2a62542cfb1e6c890ed730e147bcb69522e3dabbadce7b"' : 'data-bs-target="#xs-components-links-module-ResourceModule-048ff4375083130ddeb1382c0f86dc1ea28cd307d8efa8db07cb5798686e54e1edc46875c58c0b177b2a62542cfb1e6c890ed730e147bcb69522e3dabbadce7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourceModule-048ff4375083130ddeb1382c0f86dc1ea28cd307d8efa8db07cb5798686e54e1edc46875c58c0b177b2a62542cfb1e6c890ed730e147bcb69522e3dabbadce7b"' :
                                            'id="xs-components-links-module-ResourceModule-048ff4375083130ddeb1382c0f86dc1ea28cd307d8efa8db07cb5798686e54e1edc46875c58c0b177b2a62542cfb1e6c890ed730e147bcb69522e3dabbadce7b"' }>
                                            <li class="link">
                                                <a href="components/CurriculumCoursesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurriculumCoursesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourceRoutingModule.html" data-type="entity-link" >ResourceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' : 'data-bs-target="#xs-components-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' :
                                            'id="xs-components-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' }>
                                            <li class="link">
                                                <a href="components/HomeSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' : 'data-bs-target="#xs-injectables-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' :
                                        'id="xs-injectables-links-module-SearchModule-b3501889423e7841978a97811531b5ba187ef7a5685ef93606e77c21e369c06c7b317c47f537d47b2d804af477370f474e03f034d991cc8bb08b3d7654e281c2"' }>
                                        <li class="link">
                                            <a href="injectables/UserSearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSearchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRoutingModule.html" data-type="entity-link" >SearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedFeatureModule.html" data-type="entity-link" >SharedFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' : 'data-bs-target="#xs-components-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' :
                                            'id="xs-components-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' }>
                                            <li class="link">
                                                <a href="components/BatchInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CertPreviewPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CertPreviewPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollectionPlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionPlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentPlayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentPlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GlobalConsentPiiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GlobalConsentPiiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OnboardingUserSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnboardingUserSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtpPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtpPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileFrameworkPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileFrameworkPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SsoMergeConfirmationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SsoMergeConfirmationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsAndConditionsPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsAndConditionsPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserOnboardingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserOnboardingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidateTeacherIdentifierPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateTeacherIdentifierPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YearOfBirthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearOfBirthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' : 'data-bs-target="#xs-pipes-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' :
                                            'id="xs-pipes-links-module-SharedFeatureModule-c71b98f2c717535a91e827df47c3dc2460048cdc1b315d056412c7fd95d4ee22bf0de1bb44868d4ae807480ecec33c0b00dc015b5e0c5c2cdb3f4794a0fad556"' }>
                                            <li class="link">
                                                <a href="pipes/FrameworkCatLabelTranslatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameworkCatLabelTranslatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' : 'data-bs-target="#xs-components-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' :
                                            'id="xs-components-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' }>
                                            <li class="link">
                                                <a href="components/AccountMergeModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountMergeModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppLandingSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppLandingSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrowserCompatibilityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrowserCompatibilityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardCreationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardCreationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomMultiSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomMultiSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesktopAppUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DesktopAppUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FullPageLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FullPageLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FullPageModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FullPageModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstallAppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallAppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadOfflineContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadOfflineContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LockInfoPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LockInfoPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialAutoCompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialAutoCompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NetworkStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NetworkStatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfflineApplicationDownloadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfflineApplicationDownloadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfflineBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfflineBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OnDemandReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnDemandReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QrCodeModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RedirectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedirectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SbDatatableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbDatatableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectOptionGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectOptionGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShareLinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShareLinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlickComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlickComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SystemWarningComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SystemWarningComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' : 'data-bs-target="#xs-directives-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' :
                                        'id="xs-directives-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' }>
                                        <li class="link">
                                            <a href="directives/AddToGroupDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddToGroupDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ContentDirectionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentDirectionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HighlightTextDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightTextDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MarkdownDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarkdownDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ModalContentDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalContentDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TelemetryEventsDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryEventsDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' :
                                            'id="xs-pipes-links-module-SharedModule-e77383fe352c77d6772e683a8e26b748df114b76fb3b73e0309397779ab841bbc8ecbbc7a1499d41488425ba4bd7ec44a72433008219532628231ddab353ef24"' }>
                                            <li class="link">
                                                <a href="pipes/AutocompletePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutocompletePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CdnprefixPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CdnprefixPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DateFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateFormatPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/InterpolatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterpolatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SbDataTablePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SbDataTablePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SortByPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SortByPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TransposeTermsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransposeTermsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupModule.html" data-type="entity-link" >SignupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' : 'data-bs-target="#xs-components-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' :
                                            'id="xs-components-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' }>
                                            <li class="link">
                                                <a href="components/OtpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupBasicInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupBasicInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupEmailPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupEmailPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupOnboardingInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupOnboardingInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' : 'data-bs-target="#xs-injectables-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' :
                                        'id="xs-injectables-links-module-SignupModule-c665383fe045b59aca001f78c059e0f9bced558ba000ba75c6be1bd863b0f0a1d3015d03d3866cd56ce5afac702c10cf47b61dbc886522b7b5ffe4912e46a6ce"' }>
                                        <li class="link">
                                            <a href="injectables/SignupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupRoutingModule.html" data-type="entity-link" >SignupRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SsoModule.html" data-type="entity-link" >SsoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SsoModule-a318e5ed5b8e04a32403ac102c531fbc14e03591b4a103be7696cf6ddb61a4ccde14d195278298a084d05814d1e405bc843a78058f32fc9eb1fa2272f02ff26a"' : 'data-bs-target="#xs-components-links-module-SsoModule-a318e5ed5b8e04a32403ac102c531fbc14e03591b4a103be7696cf6ddb61a4ccde14d195278298a084d05814d1e405bc843a78058f32fc9eb1fa2272f02ff26a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SsoModule-a318e5ed5b8e04a32403ac102c531fbc14e03591b4a103be7696cf6ddb61a4ccde14d195278298a084d05814d1e405bc843a78058f32fc9eb1fa2272f02ff26a"' :
                                            'id="xs-components-links-module-SsoModule-a318e5ed5b8e04a32403ac102c531fbc14e03591b4a103be7696cf6ddb61a4ccde14d195278298a084d05814d1e405bc843a78058f32fc9eb1fa2272f02ff26a"' }>
                                            <li class="link">
                                                <a href="components/AuthFailedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthFailedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectOrgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectOrgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SsoRoutingModule.html" data-type="entity-link" >SsoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TelemetryModule.html" data-type="entity-link" >TelemetryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-TelemetryModule-6b0dc34637caa633f60289f41495fb9d8ce9147912a5097cfc55b09ac851392a56901e77369478507aba612ffb35ab4ea04267f97df89c83946f4f7e032b45b0"' : 'data-bs-target="#xs-directives-links-module-TelemetryModule-6b0dc34637caa633f60289f41495fb9d8ce9147912a5097cfc55b09ac851392a56901e77369478507aba612ffb35ab4ea04267f97df89c83946f4f7e032b45b0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TelemetryModule-6b0dc34637caa633f60289f41495fb9d8ce9147912a5097cfc55b09ac851392a56901e77369478507aba612ffb35ab4ea04267f97df89c83946f4f7e032b45b0"' :
                                        'id="xs-directives-links-module-TelemetryModule-6b0dc34637caa633f60289f41495fb9d8ce9147912a5097cfc55b09ac851392a56901e77369478507aba612ffb35ab4ea04267f97df89c83946f4f7e032b45b0"' }>
                                        <li class="link">
                                            <a href="directives/TelemetryEndDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryEndDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TelemetryErrorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryErrorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TelemetryImpressionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryImpressionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TelemetryInteractDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryInteractDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TelemetryShareDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryShareDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TelemetryStartDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TelemetryStartDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UciAdminModule.html" data-type="entity-link" >UciAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UciAdminModule-63c117ff89beb1157baaee8a7d884ec400de6138f713d88cdf1942feab624a60819ae6938ac8668f26b92821ec27d948a53e1068f610310ce64362b741d70227"' : 'data-bs-target="#xs-components-links-module-UciAdminModule-63c117ff89beb1157baaee8a7d884ec400de6138f713d88cdf1942feab624a60819ae6938ac8668f26b92821ec27d948a53e1068f610310ce64362b741d70227"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UciAdminModule-63c117ff89beb1157baaee8a7d884ec400de6138f713d88cdf1942feab624a60819ae6938ac8668f26b92821ec27d948a53e1068f610310ce64362b741d70227"' :
                                            'id="xs-components-links-module-UciAdminModule-63c117ff89beb1157baaee8a7d884ec400de6138f713d88cdf1942feab624a60819ae6938ac8668f26b92821ec27d948a53e1068f610310ce64362b741d70227"' }>
                                            <li class="link">
                                                <a href="components/UciComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UciComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UciAdminRoutingModule.html" data-type="entity-link" >UciAdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserOnboardingModule.html" data-type="entity-link" >UserOnboardingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserOnboardingModule-68a1968788ac036b1830631cb8dbb57eefc671603076918254d9b76ab17ebca80237a2769bcec285be17d92ef41044fd2e466df462ceab2cb8d40e4247cf9377"' : 'data-bs-target="#xs-components-links-module-UserOnboardingModule-68a1968788ac036b1830631cb8dbb57eefc671603076918254d9b76ab17ebca80237a2769bcec285be17d92ef41044fd2e466df462ceab2cb8d40e4247cf9377"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserOnboardingModule-68a1968788ac036b1830631cb8dbb57eefc671603076918254d9b76ab17ebca80237a2769bcec285be17d92ef41044fd2e466df462ceab2cb8d40e4247cf9377"' :
                                            'id="xs-components-links-module-UserOnboardingModule-68a1968788ac036b1830631cb8dbb57eefc671603076918254d9b76ab17ebca80237a2769bcec285be17d92ef41044fd2e466df462ceab2cb8d40e4247cf9377"' }>
                                            <li class="link">
                                                <a href="components/OnboardingPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OnboardingPopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspaceModule.html" data-type="entity-link" >WorkspaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' : 'data-bs-target="#xs-components-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' :
                                            'id="xs-components-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' }>
                                            <li class="link">
                                                <a href="components/AllContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllTextbooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllTextbooksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchPageSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchPageSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollaboratingOnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollaboratingOnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollaborationContentFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollaborationContentFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollectionEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataDrivenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataDrivenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultTemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DraftComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DraftComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FlagConentplayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FlagConentplayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FlagReviewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FlagReviewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FlaggedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FlaggedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenericEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenericEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LimitedPublishedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LimitedPublishedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewCollectionEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewCollectionEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublishedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublishedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublishedPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublishedPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestChangesPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestChangesPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewCommentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewCommentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewSubmissionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewSubmissionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewsubmissionsContentplayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewsubmissionsContentplayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpForReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpForReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateBatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateBatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpforReviewFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpforReviewFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpforreviewContentplayerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpforreviewContentplayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkspaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkspaceContentFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceContentFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkspacesidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspacesidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' : 'data-bs-target="#xs-injectables-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' :
                                        'id="xs-injectables-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' }>
                                        <li class="link">
                                            <a href="injectables/BatchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EditorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReviewCommentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewCommentsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkSpaceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkSpaceService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' : 'data-bs-target="#xs-pipes-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' :
                                            'id="xs-pipes-links-module-WorkspaceModule-54542c6f8488c017efc5172f681e6ce28547dc66c74fda4a539fd9ebe41e169763366c42416ee99971c8dc751eeb8ee2c26e6c2c6bd498020829ad44166ef478"' }>
                                            <li class="link">
                                                <a href="pipes/DateFilterXtimeAgoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateFilterXtimeAgoPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspaceRoutingModule.html" data-type="entity-link" >WorkspaceRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AboutUsComponent.html" data-type="entity-link" >AboutUsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AccountMergeModalComponent.html" data-type="entity-link" >AccountMergeModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AccountRecoveryInfoComponent.html" data-type="entity-link" >AccountRecoveryInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivityDashboardComponent.html" data-type="entity-link" >ActivityDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivityFormComponent.html" data-type="entity-link" >ActivityFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivityListComponent.html" data-type="entity-link" >ActivityListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivitySearchComponent.html" data-type="entity-link" >ActivitySearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddActivityComponent.html" data-type="entity-link" >AddActivityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddActivityContentTypesComponent.html" data-type="entity-link" >AddActivityContentTypesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddEntityComponent.html" data-type="entity-link" >AddEntityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddMemberComponent.html" data-type="entity-link" >AddMemberComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddSummaryModalComponent.html" data-type="entity-link" >AddSummaryModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AlertModalComponent.html" data-type="entity-link" >AlertModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AllContentComponent.html" data-type="entity-link" >AllContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AllEvidenceComponent.html" data-type="entity-link" >AllEvidenceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AllTextbooksComponent.html" data-type="entity-link" >AllTextbooksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppLoaderComponent.html" data-type="entity-link" >AppLoaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssignBadgesContentComponent.html" data-type="entity-link" >AssignBadgesContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthFailedComponent.html" data-type="entity-link" >AuthFailedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BackButtonComponent.html" data-type="entity-link" >BackButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BatchCardComponent.html" data-type="entity-link" >BatchCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BatchInfoComponent.html" data-type="entity-link" >BatchInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BatchListComponent.html" data-type="entity-link" >BatchListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BatchPageSectionComponent.html" data-type="entity-link" >BatchPageSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BrowserCompatibilityComponent.html" data-type="entity-link" >BrowserCompatibilityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardCreationComponent.html" data-type="entity-link" >CardCreationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CertificateConfigurationComponent.html" data-type="entity-link" >CertificateConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CertificateDetailsComponent.html" data-type="entity-link" >CertificateDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CertPreviewPopupComponent.html" data-type="entity-link" >CertPreviewPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChooseUserComponent.html" data-type="entity-link" >ChooseUserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollaboratingOnComponent.html" data-type="entity-link" >CollaboratingOnComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollaborationContentFilterComponent.html" data-type="entity-link" >CollaborationContentFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollectionEditorComponent.html" data-type="entity-link" >CollectionEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollectionPlayerComponent.html" data-type="entity-link" >CollectionPlayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollectionPlayerMetadataComponent.html" data-type="entity-link" >CollectionPlayerMetadataComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommingSoonComponent.html" data-type="entity-link" >CommingSoonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmationPopupComponent.html" data-type="entity-link" >ConfirmationPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmPopupComponent.html" data-type="entity-link" >ConfirmPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentActionsComponent.html" data-type="entity-link" >ContentActionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentBadgeComponent.html" data-type="entity-link" >ContentBadgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentChapterlistComponent.html" data-type="entity-link" >ContentChapterlistComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentCreditsComponent.html" data-type="entity-link" >ContentCreditsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentEditorComponent.html" data-type="entity-link" >ContentEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentLicenceComponent.html" data-type="entity-link" >ContentLicenceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentManagerComponent.html" data-type="entity-link" >ContentManagerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentManagerInfoPopUpComponent.html" data-type="entity-link" >ContentManagerInfoPopUpComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentPlayerComponent.html" data-type="entity-link" >ContentPlayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentPlayerComponent-1.html" data-type="entity-link" >ContentPlayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentPlayerMetadataComponent.html" data-type="entity-link" >ContentPlayerMetadataComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentPlayerPageComponent.html" data-type="entity-link" >ContentPlayerPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContentRatingComponent.html" data-type="entity-link" >ContentRatingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CourseConsumptionComponent.html" data-type="entity-link" >CourseConsumptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CourseConsumptionHeaderComponent.html" data-type="entity-link" >CourseConsumptionHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CourseConsumptionPageComponent.html" data-type="entity-link" >CourseConsumptionPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CourseDashboardComponent.html" data-type="entity-link" >CourseDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CourseInfoComponent.html" data-type="entity-link" >CourseInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CoursePageComponent.html" data-type="entity-link" >CoursePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CoursePlayerComponent.html" data-type="entity-link" >CoursePlayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CourseProgressComponent.html" data-type="entity-link" >CourseProgressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateContentComponent.html" data-type="entity-link" >CreateContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateEditGroupComponent.html" data-type="entity-link" >CreateEditGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateOrgTypeComponent.html" data-type="entity-link" >CreateOrgTypeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateTemplateComponent.html" data-type="entity-link" >CreateTemplateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateUserComponent.html" data-type="entity-link" >CreateUserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreditsAndLicenceComponent.html" data-type="entity-link" >CreditsAndLicenceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CurriculumCardComponent.html" data-type="entity-link" >CurriculumCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CurriculumCoursesComponent.html" data-type="entity-link" >CurriculumCoursesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CurriculumInfoComponent.html" data-type="entity-link" >CurriculumInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomMultiSelectComponent.html" data-type="entity-link" >CustomMultiSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardSidebarComponent.html" data-type="entity-link" >DashboardSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataChartComponent.html" data-type="entity-link" >DataChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataDrivenComponent.html" data-type="entity-link" >DataDrivenComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataDrivenFilterComponent.html" data-type="entity-link" >DataDrivenFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DatasetComponent.html" data-type="entity-link" >DatasetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataTableComponent.html" data-type="entity-link" >DataTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DefaultTemplateComponent.html" data-type="entity-link" >DefaultTemplateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DesktopAppUpdateComponent.html" data-type="entity-link" >DesktopAppUpdateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialCodeCardComponent.html" data-type="entity-link" >DialCodeCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialCodeComponent.html" data-type="entity-link" >DialCodeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DraftComponent.html" data-type="entity-link" >DraftComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditSubmissionComponent.html" data-type="entity-link" >EditSubmissionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityListComponent.html" data-type="entity-link" >EntityListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityListComponent-1.html" data-type="entity-link" >EntityListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorPageComponent.html" data-type="entity-link" >ErrorPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExploreContentComponent.html" data-type="entity-link" >ExploreContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExploreCourseComponent.html" data-type="entity-link" >ExploreCourseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExploreCurriculumCoursesComponent.html" data-type="entity-link" >ExploreCurriculumCoursesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExploreFtuPopupComponent.html" data-type="entity-link" >ExploreFtuPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExploreGroupComponent.html" data-type="entity-link" >ExploreGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExplorePageComponent.html" data-type="entity-link" >ExplorePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FancyTreeComponent.html" data-type="entity-link" >FancyTreeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FaqComponent.html" data-type="entity-link" >FaqComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilterComponent.html" data-type="entity-link" >FilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlagConentplayerComponent.html" data-type="entity-link" >FlagConentplayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlaggedComponent.html" data-type="entity-link" >FlaggedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FlagReviewerComponent.html" data-type="entity-link" >FlagReviewerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FtuPopupComponent.html" data-type="entity-link" >FtuPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FullPageLoaderComponent.html" data-type="entity-link" >FullPageLoaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FullPageModalComponent.html" data-type="entity-link" >FullPageModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenericEditorComponent.html" data-type="entity-link" >GenericEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GetComponent.html" data-type="entity-link" >GetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GlobalSearchFilterComponent.html" data-type="entity-link" >GlobalSearchFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GlobalSearchSelectedFilterComponent.html" data-type="entity-link" >GlobalSearchSelectedFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GroupDetailsComponent.html" data-type="entity-link" >GroupDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GroupHeaderComponent.html" data-type="entity-link" >GroupHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GroupMembersComponent.html" data-type="entity-link" >GroupMembersComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeSearchComponent.html" data-type="entity-link" >HomeSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IdentifyAccountComponent.html" data-type="entity-link" >IdentifyAccountComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfoCardComponent.html" data-type="entity-link" >InfoCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstallAppComponent.html" data-type="entity-link" >InstallAppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LandingPageComponent.html" data-type="entity-link" >LandingPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguageDropdownComponent.html" data-type="entity-link" >LanguageDropdownComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LibraryComponent.html" data-type="entity-link" >LibraryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LimitedPublishedComponent.html" data-type="entity-link" >LimitedPublishedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListAllReportsComponent.html" data-type="entity-link" >ListAllReportsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoadContentComponent.html" data-type="entity-link" >LoadContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LockInfoPopupComponent.html" data-type="entity-link" >LockInfoPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainFooterComponent.html" data-type="entity-link" >MainFooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainHeaderComponent.html" data-type="entity-link" >MainHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainMenuComponent.html" data-type="entity-link" >MainMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapComponent.html" data-type="entity-link" >MapComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MemberActionsComponent.html" data-type="entity-link" >MemberActionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalWrapperComponent.html" data-type="entity-link" >ModalWrapperComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyGroupsComponent.html" data-type="entity-link" >MyGroupsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewCollectionEditorComponent.html" data-type="entity-link" >NewCollectionEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoGroupResultComponent.html" data-type="entity-link" >NoGroupResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoResultComponent.html" data-type="entity-link" >NoResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoResultComponent-1.html" data-type="entity-link" >NoResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ObservationDetailsComponent.html" data-type="entity-link" >ObservationDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ObservationListingComponent.html" data-type="entity-link" >ObservationListingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OfflineApplicationDownloadComponent.html" data-type="entity-link" >OfflineApplicationDownloadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OfflineBannerComponent.html" data-type="entity-link" >OfflineBannerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OfflineHelpVideosComponent.html" data-type="entity-link" >OfflineHelpVideosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OnboardingUserSelectionComponent.html" data-type="entity-link" >OnboardingUserSelectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OnDemandReportsComponent.html" data-type="entity-link" >OnDemandReportsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrganisationComponent.html" data-type="entity-link" >OrganisationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrganizationUploadComponent.html" data-type="entity-link" >OrganizationUploadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OtpComponent.html" data-type="entity-link" >OtpComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OtpPopupComponent.html" data-type="entity-link" >OtpPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageSectionComponent.html" data-type="entity-link" >PageSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlayerComponent.html" data-type="entity-link" >PlayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopupComponent.html" data-type="entity-link" >PopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileBadgeComponent.html" data-type="entity-link" >ProfileBadgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileFrameworkPopupComponent.html" data-type="entity-link" >ProfileFrameworkPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilePageComponent.html" data-type="entity-link" >ProfilePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublicBatchDetailsComponent.html" data-type="entity-link" >PublicBatchDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublicCourseConsumptionPageComponent.html" data-type="entity-link" >PublicCourseConsumptionPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublicCoursePlayerComponent.html" data-type="entity-link" >PublicCoursePlayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublishedComponent.html" data-type="entity-link" >PublishedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublishedPopupComponent.html" data-type="entity-link" >PublishedPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QrCodeModalComponent.html" data-type="entity-link" >QrCodeModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecoverAccountComponent.html" data-type="entity-link" >RecoverAccountComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RedirectComponent.html" data-type="entity-link" >RedirectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReIssueCertificateComponent.html" data-type="entity-link" >ReIssueCertificateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportComponent.html" data-type="entity-link" >ReportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportSummaryComponent.html" data-type="entity-link" >ReportSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportViewComponent.html" data-type="entity-link" >ReportViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RequestChangesPopupComponent.html" data-type="entity-link" >RequestChangesPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewSubmissionsComponent.html" data-type="entity-link" >ReviewSubmissionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewsubmissionsContentplayerComponent.html" data-type="entity-link" >ReviewsubmissionsContentplayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SbDatatableComponent.html" data-type="entity-link" >SbDatatableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SbTableComponent-1.html" data-type="entity-link" >SbTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link" >SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchFilterComponent.html" data-type="entity-link" >SearchFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectAccountIdentifierComponent.html" data-type="entity-link" >SelectAccountIdentifierComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectOptionGroupComponent.html" data-type="entity-link" >SelectOptionGroupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectOrgComponent.html" data-type="entity-link" >SelectOrgComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ShareLinkComponent.html" data-type="entity-link" >ShareLinkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupBasicInfoComponent.html" data-type="entity-link" >SignupBasicInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupComponent.html" data-type="entity-link" >SignupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupEmailPasswordComponent.html" data-type="entity-link" >SignupEmailPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupOnboardingInfoComponent.html" data-type="entity-link" >SignupOnboardingInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SlickComponent.html" data-type="entity-link" >SlickComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SolutionListingComponent.html" data-type="entity-link" >SolutionListingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SsoMergeConfirmationComponent.html" data-type="entity-link" >SsoMergeConfirmationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatusComponent.html" data-type="entity-link" >StatusComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SubmissionsComponent.html" data-type="entity-link" >SubmissionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SubmitTeacherDetailsComponent.html" data-type="entity-link" >SubmitTeacherDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgEditorComponent.html" data-type="entity-link" >SvgEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SystemWarningComponent.html" data-type="entity-link" >SystemWarningComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TelemetryComponent.html" data-type="entity-link" >TelemetryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TelemetryImportComponent.html" data-type="entity-link" >TelemetryImportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TermsAndConditionsPopupComponent.html" data-type="entity-link" >TermsAndConditionsPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TopicPickerComponent.html" data-type="entity-link" >TopicPickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpdateBatchComponent.html" data-type="entity-link" >UpdateBatchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpdateContactComponent.html" data-type="entity-link" >UpdateContactComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpdateContactDetailsComponent.html" data-type="entity-link" >UpdateContactDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpForReviewComponent.html" data-type="entity-link" >UpForReviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpforreviewContentplayerComponent.html" data-type="entity-link" >UpforreviewContentplayerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpforReviewFilterComponent.html" data-type="entity-link" >UpforReviewFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UploadedComponent.html" data-type="entity-link" >UploadedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UsageReportsComponent.html" data-type="entity-link" >UsageReportsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserDeleteComponent.html" data-type="entity-link" >UserDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserEditComponent.html" data-type="entity-link" >UserEditComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserFilterComponent.html" data-type="entity-link" >UserFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserLocationComponent.html" data-type="entity-link" >UserLocationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserOnboardingComponent.html" data-type="entity-link" >UserOnboardingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserProfileComponent.html" data-type="entity-link" >UserProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserSearchComponent.html" data-type="entity-link" >UserSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ValidateTeacherIdentifierPopupComponent.html" data-type="entity-link" >ValidateTeacherIdentifierPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerifyAccountIdentifierComponent.html" data-type="entity-link" >VerifyAccountIdentifierComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewAllComponent.html" data-type="entity-link" >ViewAllComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewOrgTypeComponent.html" data-type="entity-link" >ViewOrgTypeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkspaceComponent.html" data-type="entity-link" >WorkspaceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkspaceContentFilterComponent.html" data-type="entity-link" >WorkspaceContentFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkspacesidebarComponent.html" data-type="entity-link" >WorkspacesidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/YearOfBirthComponent.html" data-type="entity-link" >YearOfBirthComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BodyScrollDirective.html" data-type="entity-link" >BodyScrollDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ComponentDeactivate.html" data-type="entity-link" >ComponentDeactivate</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ContentDirectionDirective.html" data-type="entity-link" >ContentDirectionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DesktopOnlyDirective.html" data-type="entity-link" >DesktopOnlyDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/HighlightTextDirective.html" data-type="entity-link" >HighlightTextDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/MarkdownDirective.html" data-type="entity-link" >MarkdownDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ModalContentDirective.html" data-type="entity-link" >ModalContentDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/OnlineOnlyDirective.html" data-type="entity-link" >OnlineOnlyDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/PermissionDirective.html" data-type="entity-link" >PermissionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TelemetryEndDirective.html" data-type="entity-link" >TelemetryEndDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TelemetryErrorDirective.html" data-type="entity-link" >TelemetryErrorDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TelemetryEventsDirective.html" data-type="entity-link" >TelemetryEventsDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TelemetryImpressionDirective.html" data-type="entity-link" >TelemetryImpressionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TelemetryInteractDirective.html" data-type="entity-link" >TelemetryInteractDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TelemetryShareDirective.html" data-type="entity-link" >TelemetryShareDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TelemetryStartDirective.html" data-type="entity-link" >TelemetryStartDirective</a>
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
                                <a href="classes/AlertModal.html" data-type="entity-link" >AlertModal</a>
                            </li>
                            <li class="link">
                                <a href="classes/CertConfigModel.html" data-type="entity-link" >CertConfigModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/OfflinePlugins.html" data-type="entity-link" >OfflinePlugins</a>
                            </li>
                            <li class="link">
                                <a href="classes/SbFormLocationOptionsFactory.html" data-type="entity-link" >SbFormLocationOptionsFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/SbFormLocationSelectionDelegate.html" data-type="entity-link" >SbFormLocationSelectionDelegate</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkSpace.html" data-type="entity-link" >WorkSpace</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActionService.html" data-type="entity-link" >ActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActivityDashboardService.html" data-type="entity-link" >ActivityDashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppUpdateService.html" data-type="entity-link" >AppUpdateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssessmentScoreService.html" data-type="entity-link" >AssessmentScoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BadgesService.html" data-type="entity-link" >BadgesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseReportService.html" data-type="entity-link" >BaseReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchService.html" data-type="entity-link" >BatchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BrowserCacheTtlService.html" data-type="entity-link" >BrowserCacheTtlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CertificateService.html" data-type="entity-link" >CertificateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CertRegService.html" data-type="entity-link" >CertRegService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChannelService.html" data-type="entity-link" >ChannelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CloudService.html" data-type="entity-link" >CloudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConnectionService.html" data-type="entity-link" >ConnectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentBadgeService.html" data-type="entity-link" >ContentBadgeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentManagerService.html" data-type="entity-link" >ContentManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentSearchService.html" data-type="entity-link" >ContentSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentService.html" data-type="entity-link" >ContentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentUtilsServiceService.html" data-type="entity-link" >ContentUtilsServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CopyContentService.html" data-type="entity-link" >CopyContentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseBatchService.html" data-type="entity-link" >CourseBatchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseConsumptionService.html" data-type="entity-link" >CourseConsumptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseConsumptionService-1.html" data-type="entity-link" >CourseConsumptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseProgressService.html" data-type="entity-link" >CourseProgressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseProgressService-1.html" data-type="entity-link" >CourseProgressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesService.html" data-type="entity-link" >CoursesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CsLibInitializerService.html" data-type="entity-link" >CsLibInitializerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomRouteReuseStrategy.html" data-type="entity-link" >CustomRouteReuseStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardUtilsService.html" data-type="entity-link" >DashboardUtilsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatasetService.html" data-type="entity-link" >DatasetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceRegisterService.html" data-type="entity-link" >DeviceRegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceService.html" data-type="entity-link" >DeviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DhitiService.html" data-type="entity-link" >DhitiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialCodeService.html" data-type="entity-link" >DialCodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DiscussionTelemetryService.html" data-type="entity-link" >DiscussionTelemetryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadService.html" data-type="entity-link" >DownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EditorService.html" data-type="entity-link" >EditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElectronDialogService.html" data-type="entity-link" >ElectronDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElectronService.html" data-type="entity-link" >ElectronService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExternalUrlPreviewService.html" data-type="entity-link" >ExternalUrlPreviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExtPluginService.html" data-type="entity-link" >ExtPluginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FaqService.html" data-type="entity-link" >FaqService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormService.html" data-type="entity-link" >FormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FrameworkService.html" data-type="entity-link" >FrameworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneraliseLabelService.html" data-type="entity-link" >GeneraliseLabelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenericResourceService.html" data-type="entity-link" >GenericResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupNotificationWrapperService.html" data-type="entity-link" >GroupNotificationWrapperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupsService.html" data-type="entity-link" >GroupsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KendraService.html" data-type="entity-link" >KendraService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LayoutService.html" data-type="entity-link" >LayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LazzyLoadScriptService.html" data-type="entity-link" >LazzyLoadScriptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LearnerService.html" data-type="entity-link" >LearnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineChartService.html" data-type="entity-link" >LineChartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationService.html" data-type="entity-link" >LocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManagedUserService.html" data-type="entity-link" >ManagedUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationHelperService.html" data-type="entity-link" >NavigationHelperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationServiceImpl.html" data-type="entity-link" >NotificationServiceImpl</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObservationService.html" data-type="entity-link" >ObservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObservationUtilService.html" data-type="entity-link" >ObservationUtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OfflineCardService.html" data-type="entity-link" >OfflineCardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OfflineReportIssuesService.html" data-type="entity-link" >OfflineReportIssuesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OnDemandReportService.html" data-type="entity-link" >OnDemandReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrganisationService.html" data-type="entity-link" >OrganisationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrgDetailsService.html" data-type="entity-link" >OrgDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrgManagementService.html" data-type="entity-link" >OrgManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrgTypeService.html" data-type="entity-link" >OrgTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OtpService.html" data-type="entity-link" >OtpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PageApiService.html" data-type="entity-link" >PageApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationService.html" data-type="entity-link" >PaginationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PdServiceService.html" data-type="entity-link" >PdServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionService.html" data-type="entity-link" >PermissionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayerService.html" data-type="entity-link" >PlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PopupControlService.html" data-type="entity-link" >PopupControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublicDataService.html" data-type="entity-link" >PublicDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublicPlayerService.html" data-type="entity-link" >PublicPlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionnaireService.html" data-type="entity-link" >QuestionnaireService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QumlPlayerService.html" data-type="entity-link" >QumlPlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecaptchaService.html" data-type="entity-link" >RecaptchaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecoverAccountService.html" data-type="entity-link" >RecoverAccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RendererService.html" data-type="entity-link" >RendererService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportService.html" data-type="entity-link" >ReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResourceService.html" data-type="entity-link" >ResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReviewCommentsService.html" data-type="entity-link" >ReviewCommentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterNavigationService.html" data-type="entity-link" >RouterNavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchemaService.html" data-type="entity-link" >SchemaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SegmentationTagService.html" data-type="entity-link" >SegmentationTagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignupService.html" data-type="entity-link" >SignupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SystemInfoService.html" data-type="entity-link" >SystemInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TelemetryActionsService.html" data-type="entity-link" >TelemetryActionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TelemetryService.html" data-type="entity-link" >TelemetryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TenantService.html" data-type="entity-link" >TenantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TncService.html" data-type="entity-link" >TncService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToasterService.html" data-type="entity-link" >ToasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadCertificateService.html" data-type="entity-link" >UploadCertificateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsageService.html" data-type="entity-link" >UsageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserSearchService.html" data-type="entity-link" >UserSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilService.html" data-type="entity-link" >UtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindowScrollService.html" data-type="entity-link" >WindowScrollService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkSpaceService.html" data-type="entity-link" >WorkSpaceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpRequestInterceptor.html" data-type="entity-link" >HttpRequestInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/SessionExpiryInterceptor.html" data-type="entity-link" >SessionExpiryInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanDeactivateGuard.html" data-type="entity-link" >CanDeactivateGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LandingpageGuard.html" data-type="entity-link" >LandingpageGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MlGuard.html" data-type="entity-link" >MlGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PendingchangesGuard.html" data-type="entity-link" >PendingchangesGuard</a>
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
                                <a href="interfaces/ActionGroups.html" data-type="entity-link" >ActionGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdditionalConfig.html" data-type="entity-link" >AdditionalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Announcement.html" data-type="entity-link" >Announcement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssociationsData.html" data-type="entity-link" >AssociationsData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoriesData.html" data-type="entity-link" >CategoriesData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Child.html" data-type="entity-link" >Child</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Collection.html" data-type="entity-link" >Collection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComponentCanDeactivate.html" data-type="entity-link" >ComponentCanDeactivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Concept.html" data-type="entity-link" >Concept</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigFilter.html" data-type="entity-link" >ConfigFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsentConfiguration.html" data-type="entity-link" >ConsentConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Content.html" data-type="entity-link" >Content</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContentCreditsData.html" data-type="entity-link" >ContentCreditsData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContentData.html" data-type="entity-link" >ContentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContentDetails.html" data-type="entity-link" >ContentDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContentIDParam.html" data-type="entity-link" >ContentIDParam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContentList.html" data-type="entity-link" >ContentList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseProgress.html" data-type="entity-link" >CourseProgress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseProgressData.html" data-type="entity-link" >CourseProgressData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseStates.html" data-type="entity-link" >CourseStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardData.html" data-type="entity-link" >DashboardData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashboardParams.html" data-type="entity-link" >DashboardParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Editdata.html" data-type="entity-link" >Editdata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feature.html" data-type="entity-link" >Feature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Framework.html" data-type="entity-link" >Framework</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FrameworkCategories.html" data-type="entity-link" >FrameworkCategories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FrameworkData.html" data-type="entity-link" >FrameworkData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geometry.html" data-type="entity-link" >Geometry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Get.html" data-type="entity-link" >Get</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpOptions.html" data-type="entity-link" >HttpOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAction.html" data-type="entity-link" >IAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IActivity.html" data-type="entity-link" >IActivity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAddress.html" data-type="entity-link" >IAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAlertModalContext.html" data-type="entity-link" >IAlertModalContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppIdEnv.html" data-type="entity-link" >IAppIdEnv</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppInfo.html" data-type="entity-link" >IAppInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuditEventEData.html" data-type="entity-link" >IAuditEventEData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuditEventInput.html" data-type="entity-link" >IAuditEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IbadgeAssertions.html" data-type="entity-link" >IbadgeAssertions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBasicInfo.html" data-type="entity-link" >IBasicInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ibatch.html" data-type="entity-link" >Ibatch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ibatch-1.html" data-type="entity-link" >Ibatch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBatchListData.html" data-type="entity-link" >IBatchListData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBigNumberChart.html" data-type="entity-link" >IBigNumberChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBreadcrumb.html" data-type="entity-link" >IBreadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICaraouselData.html" data-type="entity-link" >ICaraouselData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICard.html" data-type="entity-link" >ICard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IColDefination.html" data-type="entity-link" >IColDefination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICollectionTree.html" data-type="entity-link" >ICollectionTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICollectionTreeNodes.html" data-type="entity-link" >ICollectionTreeNodes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICollectionTreeOptions.html" data-type="entity-link" >ICollectionTreeOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IColumnConfig.html" data-type="entity-link" >IColumnConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConceptData.html" data-type="entity-link" >IConceptData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfigLabels.html" data-type="entity-link" >IConfigLabels</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContents.html" data-type="entity-link" >IContents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICourseProgressData.html" data-type="entity-link" >ICourseProgressData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICourses.html" data-type="entity-link" >ICourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICurriculum.html" data-type="entity-link" >ICurriculum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICustomMapObj.html" data-type="entity-link" >ICustomMapObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashboardItems.html" data-type="entity-link" >IDashboardItems</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataset.html" data-type="entity-link" >IDataset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSource.html" data-type="entity-link" >IDataSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataTableOptions.html" data-type="entity-link" >IDataTableOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDeleteParam.html" data-type="entity-link" >IDeleteParam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDeviceProfile.html" data-type="entity-link" >IDeviceProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEducation.html" data-type="entity-link" >IEducation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEndEventData.html" data-type="entity-link" >IEndEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEndEventInput.html" data-type="entity-link" >IEndEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEnrolledCourses.html" data-type="entity-link" >IEnrolledCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorEventData.html" data-type="entity-link" >IErrorEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorEventInput.html" data-type="entity-link" >IErrorEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExDataEventData.html" data-type="entity-link" >IExDataEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExDataEventInput.html" data-type="entity-link" >IExDataEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFancytreeOptions.html" data-type="entity-link" >IFancytreeOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFeedBackEventData.html" data-type="entity-link" >IFeedBackEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFeedBackEventInput.html" data-type="entity-link" >IFeedBackEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFetchForumConfig.html" data-type="entity-link" >IFetchForumConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFetchForumId.html" data-type="entity-link" >IFetchForumId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFlagData.html" data-type="entity-link" >IFlagData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFlagReason.html" data-type="entity-link" >IFlagReason</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IForumContext.html" data-type="entity-link" >IForumContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IForumContext-1.html" data-type="entity-link" >IForumContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGeoJSON.html" data-type="entity-link" >IGeoJSON</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGroupCard.html" data-type="entity-link" >IGroupCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGroupMember.html" data-type="entity-link" >IGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGroupMemberConfig.html" data-type="entity-link" >IGroupMemberConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGroupUpdate.html" data-type="entity-link" >IGroupUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGuest.html" data-type="entity-link" >IGuest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHighlightText.html" data-type="entity-link" >IHighlightText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHomeQueryParams.html" data-type="entity-link" >IHomeQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IImpressionEventData.html" data-type="entity-link" >IImpressionEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IImpressionEventInput.html" data-type="entity-link" >IImpressionEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IImpressionEventVisits.html" data-type="entity-link" >IImpressionEventVisits</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInputMapData.html" data-type="entity-link" >IInputMapData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractEventEdata.html" data-type="entity-link" >IInteractEventEdata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractEventInput.html" data-type="entity-link" >IInteractEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractEventObject.html" data-type="entity-link" >IInteractEventObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJobProfile.html" data-type="entity-link" >IJobProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguage.html" data-type="entity-link" >ILanguage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IListReportsFilter.html" data-type="entity-link" >IListReportsFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoaderMessage.html" data-type="entity-link" >ILoaderMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILocation.html" data-type="entity-link" >ILocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILogEventData.html" data-type="entity-link" >ILogEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILogEventInput.html" data-type="entity-link" >ILogEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMember.html" data-type="entity-link" >IMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMemberActionData.html" data-type="entity-link" >IMemberActionData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenter.html" data-type="entity-link" >IMenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INoResultMessage.html" data-type="entity-link" >INoResultMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputType.html" data-type="entity-link" >InputType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrganization.html" data-type="entity-link" >IOrganization</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IorgTypeData.html" data-type="entity-link" >IorgTypeData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrgUploadStatusResponse.html" data-type="entity-link" >IOrgUploadStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrgUploadStatusResult.html" data-type="entity-link" >IOrgUploadStatusResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPageSection.html" data-type="entity-link" >IPageSection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPagination.html" data-type="entity-link" >IPagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProducerData.html" data-type="entity-link" >IProducerData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReportConfig.html" data-type="entity-link" >IReportConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReportduration.html" data-type="entity-link" >IReportduration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReportsApiResponse.html" data-type="entity-link" >IReportsApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestData.html" data-type="entity-link" >IRequestData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISchema.html" data-type="entity-link" >ISchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelectFilter.html" data-type="entity-link" >ISelectFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShareEventData.html" data-type="entity-link" >IShareEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShareEventInput.html" data-type="entity-link" >IShareEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISharelink.html" data-type="entity-link" >ISharelink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISkill.html" data-type="entity-link" >ISkill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISort.html" data-type="entity-link" >ISort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStartEventData.html" data-type="entity-link" >IStartEventData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStartEventInput.html" data-type="entity-link" >IStartEventInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusOption.html" data-type="entity-link" >IStatusOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISummaryObject.html" data-type="entity-link" >ISummaryObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITelemetry.html" data-type="entity-link" >ITelemetry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITelemetryContext.html" data-type="entity-link" >ITelemetryContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITelemetryContextData.html" data-type="entity-link" >ITelemetryContextData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITelemetryEvent.html" data-type="entity-link" >ITelemetryEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITelemetryInfo.html" data-type="entity-link" >ITelemetryInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITelemetryShare.html" data-type="entity-link" >ITelemetryShare</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITenantData.html" data-type="entity-link" >ITenantData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITenantInfo.html" data-type="entity-link" >ITenantInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITenantSettings.html" data-type="entity-link" >ITenantSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserCertificate.html" data-type="entity-link" >IUserCertificate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserData.html" data-type="entity-link" >IUserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserOrgDetails.html" data-type="entity-link" >IUserOrgDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserProfile.html" data-type="entity-link" >IUserProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserUploadStatusResponse.html" data-type="entity-link" >IUserUploadStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserUploadStatusResult.html" data-type="entity-link" >IUserUploadStatusResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MyContributions.html" data-type="entity-link" >MyContributions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Params.html" data-type="entity-link" >Params</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Params-1.html" data-type="entity-link" >Params</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlayerConfig.html" data-type="entity-link" >PlayerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Properties.html" data-type="entity-link" >Properties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportSummary.html" data-type="entity-link" >ReportSummary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestParam.html" data-type="entity-link" >RequestParam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceAPIRequestBody.html" data-type="entity-link" >ResourceAPIRequestBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleAction.html" data-type="entity-link" >RoleAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Roles.html" data-type="entity-link" >Roles</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RolesAndPermissions.html" data-type="entity-link" >RolesAndPermissions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchParam.html" data-type="entity-link" >SearchParam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServerResponse.html" data-type="entity-link" >ServerResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Spine.html" data-type="entity-link" >Spine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetryEventOptions.html" data-type="entity-link" >TelemetryEventOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TelemetryObject.html" data-type="entity-link" >TelemetryObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TermsData.html" data-type="entity-link" >TermsData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopicTreeNode.html" data-type="entity-link" >TopicTreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UrlHistory.html" data-type="entity-link" >UrlHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Variants.html" data-type="entity-link" >Variants</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/DateFilterXtimeAgoPipe.html" data-type="entity-link" >DateFilterXtimeAgoPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/DateFormatPipe.html" data-type="entity-link" >DateFormatPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/FilterPipe.html" data-type="entity-link" >FilterPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/InterpolatePipe.html" data-type="entity-link" >InterpolatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SbDataTablePipe.html" data-type="entity-link" >SbDataTablePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SortByPipe.html" data-type="entity-link" >SortByPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TransposeTermsPipe.html" data-type="entity-link" >TransposeTermsPipe</a>
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
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});