'use client';
import React, { useState } from 'react';

export let userRole: string;

const SelectUser = () => {
	const [user, setUser] = useState('admin');

	const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedRole = event.target.value as 'admin' | 'user' | 'supervisor';
		setUser(selectedRole);
		userRole = selectedRole;
		console.log(user, userRole);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-2 mt-4">
			<div className="flex justify-between gap-2 text-sm">
				<label className="flex gap-1 cursor-pointer">
					Admin
					<input
						type="radio"
						name="admin"
						value="admin"
						checked={userRole === 'admin'}
						onChange={handleClick}
					/>
				</label>
				<label className="flex gap-1 cursor-pointer">
					Supervisor
					<input
						type="radio"
						name="supervisor"
						value="supervisor"
						checked={userRole === 'supervisor'}
						onChange={handleClick}
					/>
				</label>
				<label className="flex gap-1 cursor-pointer">
					User
					<input
						type="radio"
						name="user"
						value="user"
						checked={userRole === 'user'}
						onChange={handleClick}
					/>
				</label>
			</div>
			<p className="text-center mt-4">
				Selected rol:{' '}
				<span className="text-center font-semibold">{userRole}</span>
			</p>
		</div>
	);
};

export default SelectUser;
