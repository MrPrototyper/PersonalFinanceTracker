import { Injectable, signal, computed } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AppStore {
    private readonly _user = signal<User | null>(null);

    // Public accessors
    readonly user = computed(() => this._user());

    // Actions
    setUser(user: User) {
        this._user.set(user);
    }

    clearUser() {
        this._user.set(null);
    }

    isLoggedIn() {
        return computed(() => !!this._user());
    }

    login(email: string, password: string, authService: AuthService, onSuccess: () => void, onError: (err: any) => void) {
        authService.login(email, password).subscribe({
            next: (res) => {
                this.setUser(res.user);
                onSuccess();
            },
            error: onError,
        });
    }
}
