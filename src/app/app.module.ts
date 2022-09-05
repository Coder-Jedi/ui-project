import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { ActivityFilterBarComponent } from './components/activity-filter-bar/activity-filter-bar.component';
import { SecondaryFilterBarComponent } from './components/secondary-filter-bar/secondary-filter-bar.component';
import { SecondaryFilterItemComponent } from './components/secondary-filter-item/secondary-filter-item.component';
import { MessageBarComponent } from './components/message-bar/message-bar.component';
import { LeaderboardListComponent } from './components/leaderboard-list/leaderboard-list.component';
import { ConstituencyCardComponent } from './components/constituency-card/constituency-card.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ActivityDrawerComponent } from './components/activity-drawer/activity-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TitleBarComponent,
    ActivityFilterBarComponent,
    SecondaryFilterBarComponent,
    SecondaryFilterItemComponent,
    MessageBarComponent,
    LeaderboardListComponent,
    ConstituencyCardComponent,
    ListItemComponent,
    NavBarComponent,
    ActivityDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
