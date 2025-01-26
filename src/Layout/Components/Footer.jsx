import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="bg-white px-4 md:px-10 lg:px-20 py-4 shadow-sm dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 sm:flex-row">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Cookies</a>
                        </li>
                    </ul>

                  
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-3 sm:mt-0">
                        Copyright © 2025 Mitsogo Inc. All Rights Reserved.
                    </span>
                </div>
            </footer>

        </div>
    )
}
