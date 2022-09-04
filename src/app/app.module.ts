import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, UrlSegment } from '@angular/router';

import { TikSdkModule } from 'projects/sdk/src/public-api';
import { TikUtilsModule } from 'projects/utils/src/public-api';
import { TikDynamicComponentModule } from 'projects/dynamic-component/src/public-api';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MaterialModule } from './material';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { CardSearchComponent } from './components/search/card/card-search/card-search.component';
import { CardSearchFlightIranComponent } from './components/search/card/card-search-flight-iran/card-search-flight-iran.component';
import { HeroComponent } from './components/hero/hero.component';
import { InputSearchCityComponent } from './components/search/input/input-search-city/input-search-city.component';
import { InputSearchCalendarComponent } from './components/search/input/input-search-calendar/input-search-calendar.component';
import { InputSearchPassengerComponent } from './components/search/input/input-search-passenger/input-search-passenger.component';
import { InputSearchComponent } from './components/search/input/input-search/input-search.component';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { SearchComponent } from './routes/search/search.component';
import { CardResultComponent } from './components/result/card-result/card-result.component';
import { HeaderResultComponent } from './components/result/header-result/header-result.component';
import { BreadcrumbsComponent } from './components/material/breadcrumbs/breadcrumbs.component';
import { BreadcrumbComponent } from './components/material/breadcrumb/breadcrumb.component';
import { FilterResultComponent } from './components/result/filter-result/filter-result.component';
import { FilterSectionResultComponent } from './components/result/filter-section-result/filter-section-result.component';
import { DcFilterPriceComponent } from './components/result/dc-filter-price/dc-filter-price.component';
import { DcFilterCheckboxComponent } from './components/result/dc-filter-checkbox/dc-filter-checkbox.component';
import { DcFilterRadioComponent } from './components/result/dc-filter-radio/dc-filter-radio.component';
import { DcFilterCardComponent } from './components/result/dc-filter-card/dc-filter-card.component';
import { SearchDefaultTypes } from './services/search/search/search.default';
import {
  PreSearchGuard,
  PreSearchMatcher,
} from './guard/pre-search/pre-search.guard';
import { AuthPhoneComponent } from './routes/auth/auth-phone/auth-phone.component';
import { AuthLoginComponent } from './routes/auth/auth-login/auth-login.component';
import { AuthForgetComponent } from './routes/auth/auth-forget/auth-forget.component';
import { DialogFlightIranComponent } from './dialog/result/dialog-flight-iran/dialog-flight-iran.component';
import { DcCardFlightIranResultComponent } from './components/result/dc-card-flight-iran-result/dc-card-flight-iran-result.component';
import { ReserveInfoComponent } from './routes/reserve/reserve-info/reserve-info.component';
import { HeaderBreadcrumbResultComponent } from './components/result/header-breadcrumb-result/header-breadcrumb-result.component';
import { ReserveInformationComponent } from './components/reserve/reserve-information/reserve-information.component';
import { ReserveDescriptionComponent } from './components/reserve/reserve-description/reserve-description.component';
import { CardReserveComponent } from './components/reserve/card-reserve/card-reserve.component';
import { PassengerCardComponent } from './components/passenger/passenger-card/passenger-card.component';
import { PassengerHeaderComponent } from './components/passenger/passenger-header/passenger-header.component';
import { HeaderReserveComponent } from './components/reserve/header-reserve/header-reserve.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MeLayoutComponent } from './layouts/me-layout/me-layout.component';
import { AuthRegisterComponent } from './routes/auth/auth-register/auth-register.component';
import { MeWalletComponent } from './routes/me/me-wallet/me-wallet.component';
import { MePassengerComponent } from './routes/me/me-passenger/me-passenger.component';
import { DialogPassengerComponent } from './dialog/me/dialog-passenger/dialog-passenger.component';
import { MeProfileComponent } from './routes/me/me-profile/me-profile.component';
import { ReserveDetailsComponent } from './routes/reserve/reserve-details/reserve-details.component';
import { ReserveFactorComponent } from './components/reserve/reserve-factor/reserve-factor.component';
import { CardSearchFlightWorldComponent } from './components/search/card/card-search-flight-world/card-search-flight-world.component';
import { CardSearchHotelComponent } from './components/search/card/card-search-hotel/card-search-hotel.component';
import { CardSearchBusComponent } from './components/search/card/card-search-bus/card-search-bus.component';
import { CardSearchTrainComponent } from './components/search/card/card-search-train/card-search-train.component';
import { CardSearchInsuranceComponent } from './components/search/card/card-search-insurance/card-search-insurance.component';
import { HelpCenterLayoutComponent } from './layouts/help-center-layout/help-center-layout.component';
import { HelpCenterComponent } from './routes/help-center/help-center/help-center.component';
import { HotelComponent } from './routes/hotel/hotel.component';
import { ShareComponent } from './components/share/share.component';
import { DcHotelAttributesComponent } from './components/result/dc-hotel-attributes/dc-hotel-attributes.component';
import { DcHotelHeaderComponent } from './components/result/dc-hotel-header/dc-hotel-header.component';
import { DcHotelRoomComponent } from './components/result/dc-hotel-room/dc-hotel-room.component';
import { InputSearchRoomComponent } from './components/search/input/input-search-room/input-search-room.component';
import { DcErrorResultComponent } from './components/result/dc-error-result/dc-error-result.component';
import { DcFooterComponent } from './components/dc-footer/dc-footer.component';
import { ContainerComponent } from './components/container/container.component';
import { BottomNavBarComponent } from './components/bottom-nav-bar/bottom-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { InputSearchFlightIranCityComponent } from './components/search/input/input-search-flight-iran-city/input-search-flight-iran-city.component';
import { InputSearchFlightWorldCityComponent } from './components/search/input/input-search-flight-world-city/input-search-flight-world-city.component';
import { FilterHeaderComponent } from './components/result/filter-header/filter-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardSearchComponent,
    CardSearchFlightIranComponent,
    HeroComponent,
    InputSearchCityComponent,
    InputSearchCalendarComponent,
    InputSearchPassengerComponent,
    InputSearchComponent,
    FilterPipe,
    SearchComponent,
    CardResultComponent,
    HeaderResultComponent,
    BreadcrumbsComponent,
    BreadcrumbComponent,
    FilterResultComponent,
    FilterSectionResultComponent,
    DcFilterPriceComponent,
    DcFilterCheckboxComponent,
    DcFilterRadioComponent,
    DcFilterCardComponent,
    AuthPhoneComponent,
    AuthLoginComponent,
    AuthForgetComponent,
    DialogFlightIranComponent,
    DcCardFlightIranResultComponent,
    ReserveInfoComponent,
    HeaderBreadcrumbResultComponent,
    ReserveInformationComponent,
    ReserveDescriptionComponent,
    CardReserveComponent,
    PassengerCardComponent,
    PassengerHeaderComponent,
    HeaderReserveComponent,
    AuthLayoutComponent,
    MeLayoutComponent,
    AuthRegisterComponent,
    MeWalletComponent,
    MePassengerComponent,
    DialogPassengerComponent,
    MeProfileComponent,
    ReserveDetailsComponent,
    ReserveFactorComponent,
    CardSearchFlightWorldComponent,
    CardSearchHotelComponent,
    CardSearchBusComponent,
    CardSearchTrainComponent,
    CardSearchInsuranceComponent,
    HelpCenterLayoutComponent,
    HelpCenterComponent,
    HotelComponent,
    ShareComponent,
    DcHotelAttributesComponent,
    DcHotelHeaderComponent,
    DcHotelRoomComponent,
    InputSearchRoomComponent,
    DcErrorResultComponent,
    DcFooterComponent,
    ContainerComponent,
    BottomNavBarComponent,
    InputSearchFlightIranCityComponent,
    InputSearchFlightWorldCityComponent,
    FilterHeaderComponent,
  ],
  imports: [
    HttpClientModule,
    NgxSliderModule,
    TikSdkModule,
    TikUtilsModule,
    TikDynamicComponentModule.forRoot({
      components: [
        {
          name: 'dc-filter-price',
          component: DcFilterPriceComponent,
        },
        {
          name: 'dc-filter-checkbox',
          component: DcFilterCheckboxComponent,
        },
        {
          name: 'dc-filter-radio',
          component: DcFilterRadioComponent,
        },
        {
          name: 'dc-filter-card',
          component: DcFilterCardComponent,
        },
        {
          name: 'dc-card-flight-iran',
          component: DcCardFlightIranResultComponent,
        },
        {
          name: 'dc-error-result',
          component: DcErrorResultComponent,
        },
        {
          name: 'dc-footer',
          component: DcFooterComponent,
        },
        {
          name: 'dc-filter-header',
          component: FilterHeaderComponent,
        },
      ],
    }),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
          {
            path: '',
            component: AuthPhoneComponent,
          },
          {
            path: 'register',
            component: AuthRegisterComponent,
          },
          {
            path: 'login',
            component: AuthLoginComponent,
          },
          {
            path: 'forget',
            component: AuthForgetComponent,
          },
          {
            path: '**',
            redirectTo: '/auth',
          },
        ],
      },
      {
        path: 'me',
        component: MeLayoutComponent,
        children: [
          {
            path: '',
            component: MeProfileComponent,
          },
          {
            path: 'passenger',
            component: MePassengerComponent,
          },
          {
            path: 'wallet',
            component: MeWalletComponent,
          },
          {
            path: '**',
            redirectTo: '/me',
          },
        ],
      },
      {
        path: 'hotel/:id/:entry/:end',
        component: HotelComponent,
      },
      {
        matcher: (url) => {
          if (
            url.length == 0 ||
            SearchDefaultTypes.includes(url[0].path as any)
          )
            return {
              consumed: url,
              posParams: {
                type: new UrlSegment(
                  url.length == 0 ? 'flight-iran' : url[0].path,
                  {}
                ),
              },
            };
          return null;
        },
        component: HomeComponent,
      },
      {
        matcher: PreSearchMatcher('search'),
        canActivate: [PreSearchGuard],
        component: SearchComponent,
      },
      {
        path: 'reserve/details',
        component: ReserveDetailsComponent,
      },
      {
        path: 'reserve/info',
        component: ReserveInfoComponent,
      },
      {
        path: 'help-center',
        component: HelpCenterLayoutComponent,
        children: [
          {
            path: '',
            component: HelpCenterComponent,
          },
          {
            path: '**',
            redirectTo: '/help-center',
          },
        ],
      },
    ]),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
