import sqlite3

def init_db():
    # Connect to database (creates it if it doesn't exist)
    conn = sqlite3.connect('store.db')
    cursor = conn.cursor()

    # 1. Create the table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            key_name TEXT UNIQUE,  -- This must match your YOLO class names!
            page_name TEXT
        )
    ''')

    # 2. Add your products
    products = [
        ("apple", "product_apple.png"),
        ("banana", "product_banana.png"),
        ("blueberry", "product_blueberry.png")
    ]

    # Insert data (ignoring duplicates if you run this twice)
    cursor.executemany('''
        INSERT OR IGNORE INTO products (key_name, page_name)
        VALUES (?, ?)
    ''', products)

    conn.commit()
    conn.close()
    print("Database 'store.db' created successfully!")

if __name__ == "__main__":
    init_db()