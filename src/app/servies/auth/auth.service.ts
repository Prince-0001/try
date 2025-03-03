import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthKeys } from '../../enum/auth-keys.enum';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private router: Router) {
    const storedUser = localStorage.getItem(AuthKeys.CURRENT_USER);
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }


  private getUsers(): User[] {
    const users = localStorage.getItem(AuthKeys.USERS);
    return users ? JSON.parse(users) : [];
  }

  
  register(username: string, password: string): boolean {
    const users = this.getUsers();
    
    
    if (users.find(user => user.username === username)) {
      return false; 
    }

    
    users.push({ username, password });
    localStorage.setItem(AuthKeys.USERS, JSON.stringify(users));
    return true;
  }

  
  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem(AuthKeys.CURRENT_USER, JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.router.navigate(['/home']); 
      return true;
    }
    
    return false; 
  }

  logout(): void {
    localStorage.removeItem(AuthKeys.CURRENT_USER);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']); 
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem(AuthKeys.CURRENT_USER);
  }


  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  navigateByUrl(url:string):void{
    this.router.navigateByUrl(url,{replaceUrl:true})
  }
}
